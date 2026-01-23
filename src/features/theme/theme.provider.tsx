import { useEffect } from 'react';

import { THEMES } from '@/constants';
import { useAppDispatch, useAppSelector } from '@hooks';

import { ThemeProviderProps } from './theme.types';

/**
 * Provider for application theme
 */
export const ThemeProvider = ({
    children,
    defaultTheme = THEMES.system,
}: ThemeProviderProps) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.theme);

    // Side effect to run whenever theme or default theme changes
    useEffect(() => {
        // Select root and remove light or dark class
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        // If theme is set to system , check which theme does it map to
        if (theme === THEMES.system) {
            // Check color scheme
            const systemTheme = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
                ? THEMES.dark
                : THEMES.light;

            // Add the required theme class to root
            root.classList.add(systemTheme);

            return;
        }

        // Add theme to root
        root.classList.add(theme);
    }, [theme, dispatch, defaultTheme]);

    return <>{children}</>;
};
