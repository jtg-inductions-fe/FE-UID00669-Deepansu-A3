import {
    TypographyColorVariantTypes,
    TypographyVariantTypes,
} from './Typography.types';

/**
 * Tailwind class map from variant to class
 */
export const VariantClassMap = {
    h1: 'text-4xl font-semibold',
    h2: 'text-2xl font-semibold',
    h3: 'text-base font-bold',
    h4: 'text-xl font-normal',
    span: 'text-base font-semibold',
    p: 'text-base font-normal',
    muted: 'text-sm',
    small: 'text-xs',
} satisfies Record<TypographyVariantTypes, string>;

/**
 * Tailwind class map from variant to class
 */
export const ColorVariantClassMap = {
    primary: 'text-primary',
    foreground: 'text-foreground',
    secondary: 'text-secondary',
    destructive: 'text-destructive',
    muted: 'text-muted-foreground',
} satisfies Record<TypographyColorVariantTypes, string>;
