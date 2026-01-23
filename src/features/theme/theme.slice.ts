import { THEMES } from '@constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { THEME_SLICE_INITIAL_STATE } from './theme.slice.constant';
import { ThemeTypes } from './theme.types';

/**
 * Slice for the theme of the application
 */
export const themeSlice = createSlice({
    name: 'theme',
    initialState: THEME_SLICE_INITIAL_STATE,
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
