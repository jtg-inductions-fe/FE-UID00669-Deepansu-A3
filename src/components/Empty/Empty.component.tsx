import { PropsWithChildren } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { Typography } from '@components/Typography';
import { cn } from '@utils';

function Empty({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="empty"
            className={cn(
                'gap-5 rounded-xl border px-10 py-6 flex w-fit min-w-0 flex-1 flex-col items-center justify-center text-center text-balance',
                className,
            )}
            {...props}
        />
    );
}

function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="empty-header"
            className={cn(
                'gap-0 flex max-w-sm flex-col items-center',
                className,
            )}
            {...props}
        />
    );
}

const emptyMediaVariants = cva(
    'flex items-center justify-center p-1 rounded-full',
    {
        variants: {
            variant: {
                default: 'bg-inherit',
                primary: 'bg-primary/20 text-primary',
                success: 'bg-green-400',
                error: 'bg-red-400',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
);

function EmptyMedia({
    className,
    variant = 'primary',
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
    return (
        <div
            data-slot="empty-icon"
            data-variant={variant}
            className={cn(emptyMediaVariants({ variant, className }))}
            {...props}
        />
    );
}

function EmptyTitle({
    className,
    children,
}: { className?: string } & PropsWithChildren) {
    return (
        <Typography
            tag="h1"
            variant="h2"
            data-slot="empty-title"
            className={cn('mt-5', className)}
        >
            {children}
        </Typography>
    );
}

function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
    return (
        <div
            data-slot="empty-description"
            className={cn(
                'text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
                className,
            )}
            {...props}
        />
    );
}

function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="empty-content"
            className={cn(
                'gap-2.5 text-sm flex w-full max-w-sm min-w-0 flex-row items-center text-balance',
                className,
            )}
            {...props}
        />
    );
}

function EmptyFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="empty-content"
            className={cn(
                'gap-2.5 flex w-full flex-row items-center *:w-1/2',
                className,
            )}
            {...props}
        />
    );
}

export {
    Empty,
    EmptyHeader,
    EmptyTitle,
    EmptyDescription,
    EmptyContent,
    EmptyMedia,
    EmptyFooter,
};
