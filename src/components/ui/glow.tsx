import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Glow component
 */
export const Glow = ({
    className,
    glowClass,
}: React.ComponentProps<'div'> & {
    glowClass?: string;
}) => (
    <div className={cn('absolute -z-10 h-10 w-10 blur-2xl', className)}>
        <div className={cn('h-full bg-primary', glowClass)}></div>
    </div>
);
