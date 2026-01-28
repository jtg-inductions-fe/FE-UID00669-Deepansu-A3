import { TypographyVariantTypes } from './Typography.types';

/**
 * Tailwind class map from variant to class
 */
export const VariantClassMap = {
    h1: 'text-4xl font-semibold',
    h2: 'text-2xl font-semibold',
    h3: 'text-base font-bold',
    span: 'text-base font-semibold',
    p: 'text-base font-normal',
    muted: 'text-muted-foreground text-sm',
    small: 'text-xs',
} satisfies Record<TypographyVariantTypes, string>;
