import { baseApi } from '@features';

import { LoginRequest, LoginResponse, RefreshAuthResponse } from './user.types';

/**
 * User Api service
 * Contains all endpoint related to the user
 */
export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: 'user/login/',
                method: 'POST',
                body,
            }),
        }),
        refreshAuth: builder.mutation<RefreshAuthResponse, null>({
            query: () => ({
                url: 'user/token/refresh/',
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginMutation, useRefreshAuthMutation } = userApi;
