import { Loader2Icon } from 'lucide-react';

import { cn } from '@utils';

/**
 * Custom Spinner component
 */
export const Spinner = ({
    className,
    ...props
}: React.ComponentProps<'svg'>) => (
    <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn('size-4 animate-spin text-primary', className)}
        {...props}
    />
);
