import { THEMES } from '@constants/theme.constant';

export type ThemeTypes = keyof typeof THEMES;

/**
 * Type for theme slice
 */
export interface ThemeSliceType {
    /**
     * Current theme ( options - ThemeTypes )
     */
    theme: ThemeTypes;
}

/**
 * Props available for theme provider
 */
export interface ThemeProviderProps {
    /**
     * Children of provider
     */
    children: React.ReactNode;

    /**
     * Default theme for the application
     */
    defaultTheme?: ThemeTypes;
}
