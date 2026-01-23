import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_SLICE_INITIAL_STATE } from './user.slice.constant';
import { UserDetails } from './user.slice.types';

/**
 * Slice for the user of the application
 */
export const userSlice = createSlice({
    name: 'user',
    initialState: USER_SLICE_INITIAL_STATE,
    reducers: {
        /**
         * Reducer to set access token to passed value
         */
        setIsAuthenticated: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload;
        },

        /**
         * Reducer to set user to passed value
         */
        setUser: (state, action: PayloadAction<UserDetails>) => {
            state.user = action.payload;
        },

        /**
         * Reducer to delete/remove the user
         */
        deleteUser: (state) => {
            state.user = null;
            state.access_token = null;
        },
    },
});

export const { setIsAuthenticated, setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
