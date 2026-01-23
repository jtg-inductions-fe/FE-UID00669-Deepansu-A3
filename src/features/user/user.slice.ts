import type { UserType } from '@/types/user.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_SLICE_INITIAL_STATE } from './user.slice.constant';

/**
 * Slice for the user of the application
 */
export const userSlice = createSlice({
    name: 'user',
    initialState: USER_SLICE_INITIAL_STATE,
    reducers: {
        /**
         * Reducer to set user to passed value
         */
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload;
        },

        /**
         * Reducer to delete/remove the user
         */
        deleteUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
