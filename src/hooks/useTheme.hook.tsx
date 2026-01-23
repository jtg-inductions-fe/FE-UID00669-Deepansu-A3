import { ThemeTypes } from '@/features/theme/theme.types';
import { setTheme, toggleTheme } from '@features/theme';
import { useAppDispatch, useAppSelector } from '@hooks';

/**
 * Hook to get current theme and actions related to theme
 */
export const useTheme = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.theme);

    return {
        theme,
        /**
         * Function to toggle theme between (light and dark)
         */
        toggleTheme: () => dispatch(toggleTheme()),

        /**
         * Function to set theme to passed theme
         */
        setTheme: (passed_theme: ThemeTypes) =>
            dispatch(setTheme(passed_theme)),
    };
};
