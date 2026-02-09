import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AUTH_SLICE_INITIAL_STATE } from './auth.slice.constant';

/**
 * Slice for the authentication of the application
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState: AUTH_SLICE_INITIAL_STATE,
    reducers: {
        /**
         * Reducer to set access token to passed value
         */
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload;
        },

        /**
         * Reducer to delete/remove the user's access token
         */
        removeAccessToken: (state) => {
            state.access_token = null;
        },
    },
});

export const { removeAccessToken, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
