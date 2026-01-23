import { ComponentProps } from 'react';

import { cn } from '@utils';

/**
 * Glow component for blur effect
 */
export const Glow = ({
    className,
    glowClass,
}: ComponentProps<'div'> & {
    glowClass?: string;
}) => (
    <div className={cn('absolute -z-10 h-10 w-10 blur-2xl', className)}>
        <div className={cn('h-full bg-primary', glowClass)}></div>
    </div>
);
