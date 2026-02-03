import { baseApi } from '@features';

import { AuthResponse, LoginRequest } from './user.types';

/**
 * User Api service
 * Contains all endpoint related to the user
 */
export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (body) => ({
                url: 'user/login/',
                method: 'POST',
                body,
            }),
        }),
        refreshAuth: builder.mutation<AuthResponse, null>({
            query: () => ({
                url: 'user/token/refresh/',
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginMutation, useRefreshAuthMutation } = userApi;
