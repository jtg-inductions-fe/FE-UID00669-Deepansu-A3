import { THEMES } from '@constants/theme.constant';

import { ThemeSliceType } from './theme.types';

/**
 * Initial state of the slice based on theme slice type
 */
export const THEME_SLICE_INITIAL_STATE: ThemeSliceType = {
    theme: THEMES.system,
};
