import { THEMES } from '@constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeSliceType, ThemeTypes } from './theme.types';

/**
 * Initial state of the slice based on theme slice type
 */
const initialState: ThemeSliceType = {
    theme: THEMES.system,
};

/**
 * Slice for the theme of the application
 */
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        /**
         * Reducer to set theme to passed value
         */
        setTheme: (state, action: PayloadAction<ThemeTypes>) => {
            state.theme = action.payload;
        },

        /**
         * Reducer to toggle the theme between light and dark
         */
        toggleTheme: (state) => {
            if (state.theme === THEMES.light) {
                state.theme = THEMES.dark;
            } else {
                state.theme = THEMES.light;
            }
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
