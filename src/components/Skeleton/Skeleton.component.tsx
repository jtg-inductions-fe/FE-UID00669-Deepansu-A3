import { ComponentProps } from 'react';

import { cn } from '@utils';

/**
 * Reusable Skeleton component
 * that support external style overriding
 */
export const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        data-slot="skeleton"
        className={cn(
            'w-screen h-screen bg-primary/20 rounded-md animate-pulse',
            className,
        )}
        {...props}
    />
);
