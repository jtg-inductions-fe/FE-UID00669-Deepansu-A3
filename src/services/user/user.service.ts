import { baseApi, removeAccessToken, setAccessToken } from '@features';

import {
    LOGIN_URL,
    LOGOUT_URL,
    SIGNUP_URL,
    TOKEN_REFRESH_URL,
    USER_PROFILE_URL,
} from './user.constants';
import {
    AuthResponse,
    LoginRequest,
    SignupRequest,
    UserDetailsResponse,
} from './user.types';

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
                url: SIGNUP_URL,
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
        logOut: builder.mutation<void, void>({
            query: () => ({
                url: LOGOUT_URL,
                method: 'POST',
            }),
            onQueryStarted(_, { dispatch, queryFulfilled }) {
                void queryFulfilled.then(() => {
                    dispatch(removeAccessToken());
                    dispatch(baseApi.util.invalidateTags(['User']));
                });
            },
        }),
        profileDetails: builder.query<UserDetailsResponse, void>({
            query: () => USER_PROFILE_URL,
            providesTags: ['User'],
        }),
    }),
});

export const {
    useLoginMutation,
    useRefreshAuthMutation,
    useSignupMutation,
    useLogOutMutation,
    useProfileDetailsQuery,
} = userApi;
