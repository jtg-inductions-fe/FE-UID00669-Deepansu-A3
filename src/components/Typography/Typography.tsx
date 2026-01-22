import { cn } from '@/lib/utils';

import { TAGS } from './Typography.constants';
import { TagType, TypographyProps } from './Typography.types';

/**
 * Tailwind class map from variant to class
 */
export const VariantClassMap = {
    h1: 'text-4xl font-semibold',
    h2: 'text-2xl font-semibold',
    h3: 'text-base font-bold',
    span: 'text-base font-semibold',
    p: 'text-base font-regular',
    muted: 'text-muted-foreground text-sm',
    small: 'text-xs',
} satisfies Record<TagType, string>;

/**
 * Typography component
 */
export const Typography = (props: TypographyProps) => {
    const { tag, variant = TAGS.span, children, className } = props;

    const Comp = tag || TAGS.p;

    return (
        <Comp className={cn(VariantClassMap[variant], className)}>
            {children}
        </Comp>
    );
};
