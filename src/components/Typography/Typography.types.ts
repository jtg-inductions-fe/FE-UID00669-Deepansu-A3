import { PropsWithChildren } from 'react';

import { TAGS } from './Typography.constants';

export type TagType = keyof typeof TAGS;

/**
 * Props for custom typography component
 */
export interface TypographyProps extends PropsWithChildren {
    /**
     * Classes to override
     */
    className?: string;

    /**
     * Tag to render
     */
    tag?: Exclude<TagType, 'muted'>;

    /**
     * Styles variant
     */
    variant?: TagType;
}
