import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '@types';

import { COMMON_SLICE_INITIAL_STATE } from './common.slice.constant';

/**
 * Slice for the common (states) of the application
 */
export const commonSlice = createSlice({
    name: 'common',
    initialState: COMMON_SLICE_INITIAL_STATE,
    reducers: {
        /**
         * Reducer to set the city
         */
        setCity: (state, action: PayloadAction<City>) => {
            state.city = action.payload;
        },

        /**
         * Reducer to delete/remove the city
         */
        removeCity: (state) => {
            state.city = null;
        },
    },
});

export const { setCity, removeCity } = commonSlice.actions;

export default commonSlice.reducer;
