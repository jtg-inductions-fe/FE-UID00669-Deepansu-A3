import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@types';

import { UserSliceType } from './userSlice.types';

/**
 * Initial state of the slice based on user slice type
 */
const initialState: UserSliceType = {
    user: null,
};

/**
 * Slice for the user of the application
 */
export const userSlice = createSlice({
    name: 'user',
    initialState,
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
