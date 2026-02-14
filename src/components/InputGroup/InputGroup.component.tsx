import { ComponentProps } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { Input } from '@components/Input';
import { cn } from '@utils';

import {
    inputGroupAddonVariants,
    inputGroupVariants,
} from './InputGroup.styles';

/**
 * Input Group Component that supports style overriding
 */
export const InputGroup = ({
    className,
    variant = 'default',
    ...props
}: ComponentProps<'div'> & VariantProps<typeof inputGroupVariants>) => (
    <div
        data-slot="input-group"
        role="group"
        className={cn(inputGroupVariants({ variant }), className)}
        {...props}
    />
);

/**
 * Input Group Component Addon that supports style overriding
 */
export const InputGroupAddon = ({
    className,
    align = 'inline-start',
    ...props
}: ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) => (
    <div
        data-slot="input-group-addon"
        data-align={align}
        className={cn(inputGroupAddonVariants({ align }), className)}
        {...props}
    />
);

/**
 * Input Group Component Input that supports style overriding
 */
export const InputGroupInput = ({
    className,
    ...props
}: ComponentProps<'input'>) => (
    <Input
        data-slot="input-group-control"
        className={cn(
            'rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1',
            className,
        )}
        {...props}
    />
);
