import { PropsWithChildren } from 'react';

import { TYPOGRAPHY_VARIANTS } from './Typography.constants';

export type TypographyVariantTypes = keyof typeof TYPOGRAPHY_VARIANTS;

/**
 * Props for custom typography component
 */
export interface TypographyProps extends PropsWithChildren {
    /**
     * Classes to override
     */
    className?: string;

    /**
     * Tag to render in dom
     */
    tag?: Exclude<TypographyVariantTypes, 'muted'>;

    /**
     * Styles variant
     */
    variant?: TypographyVariantTypes;
}
