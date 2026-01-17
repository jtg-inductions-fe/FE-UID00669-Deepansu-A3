import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

/**
 * H1 Typography component
 */
export const TypographyH1 = (
    props: PropsWithChildren<{ className?: string }>,
) => {
    const { children, className } = props;

    return (
        <h1 className={cn('text-4xl font-semibold tracking-tight', className)}>
            {children}
        </h1>
    );
};

/**
 * H2 Typography component
 */
export const TypographyH2 = (
    props: PropsWithChildren<{ className?: string }>,
) => {
    const { children, className } = props;

    return (
        <h2 className={cn('text-2xl font-semibold tracking-tight', className)}>
            {children}
        </h2>
    );
};

/**
 * H3 Typography component
 */
export const TypographyH3 = (
    props: PropsWithChildren<{ className?: string }>,
) => {
    const { children, className } = props;

    return (
        <h3 className={cn('text-base font-semibold tracking-tight', className)}>
            {children}
        </h3>
    );
};

/**
 * Muted Typography component
 */
export const TypographyMuted = (
    props: PropsWithChildren<{ className?: string }>,
) => {
    const { children, className } = props;

    return (
        <p className={cn('text-muted-foreground text-sm', className)}>
            {children}
        </p>
    );
};
