import { Mutex } from 'async-mutex';

import { removeAccessToken, setAccessToken } from '@features';
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from '@store';

import {
    BACKEND_URL,
    noRefreshTryEndpoints,
    protectedEndpoints,
} from './api.constants';

const mutex = new Mutex();

/**
 * Base query for all other queries
 * Conditionally adds authorization header (if the endpoint is in protected endpoints list)
 */
const baseQuery = fetchBaseQuery({
    baseUrl: BACKEND_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState, endpoint }) => {
        const token = (getState() as RootState).auth.access_token;

        if (protectedEndpoints.includes(endpoint) && token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

/**
 * baseQueryWithReauth
 * Base query that triggers token refresh request
 * once a request results in 401
 */
export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);

    if (
        result.error &&
        result.error.status === 401 &&
        !noRefreshTryEndpoints.includes(api.endpoint)
    ) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = (await baseQuery(
                    { url: 'user/token/refresh/', method: 'POST' },
                    api,
                    extraOptions,
                )) as { data?: { access: string } };

                if (refreshResult.data) {
                    api.dispatch(setAccessToken(refreshResult.data.access));
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(removeAccessToken());
                }
            } finally {
                // release must be called once the mutex should be released again.
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};
