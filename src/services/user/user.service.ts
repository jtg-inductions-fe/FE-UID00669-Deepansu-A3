import { baseApi, setAccessToken } from '@features';

import { LOGIN_URL, TOKEN_REFRESH_URL } from './user.constants';
import { AuthResponse, LoginRequest } from './user.types';

/**
 * User Api service
 * Contains all endpoint related to the user
 */
export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (body) => ({
                url: LOGIN_URL,
                method: 'POST',
                body,
            }),
            onQueryStarted(_, { dispatch, queryFulfilled }) {
                void queryFulfilled.then((response) => {
                    dispatch(setAccessToken(response.data.access));
                });
            },
        }),
        refreshAuth: builder.mutation<AuthResponse, void>({
            query: () => ({
                url: TOKEN_REFRESH_URL,
                method: 'POST',
            }),
            onQueryStarted(_, { dispatch, queryFulfilled }) {
                void queryFulfilled.then((response) => {
                    dispatch(setAccessToken(response.data.access));
                });
            },
        }),
    }),
});

export const { useLoginMutation, useRefreshAuthMutation } = userApi;
