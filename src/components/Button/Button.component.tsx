import * as React from 'react';

import { type VariantProps } from 'class-variance-authority';
import { Link, LinkProps } from 'react-router';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@utils/styling.utils';

import { buttonVariants } from './Button.styles';

/**
 * Button component
 */
export const Button = ({
    className,
    variant = 'default',
    size = 'default',
    asChild = false,
    type,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) => {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            type={asChild ? undefined : (type ?? 'button')}
            {...props}
        />
    );
};

/**
 * Link component
 */
export const LinkButton = ({
    className,
    variant,
    size,
    children,
    ...props
}: LinkProps & VariantProps<typeof buttonVariants>) => (
    <Link
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
    >
        {children}
    </Link>
);
