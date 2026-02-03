import { baseApi, setAccessToken } from '@features';

import { LOGIN_URL, TOKEN_REFRESH_URL } from './user.constants';
import { AuthResponse, LoginRequest, SignupRequest } from './user.types';

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
        signup: builder.mutation<AuthResponse, SignupRequest>({
            query: (body) => ({
                url: 'user/signup/',
                method: 'POST',
                body,
            }),
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
        logOut: builder.mutation<null, null>({
            query: () => ({
                url: 'user/logout/',
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRefreshAuthMutation,
    useSignupMutation,
    useLogOutMutation,
} = userApi;
