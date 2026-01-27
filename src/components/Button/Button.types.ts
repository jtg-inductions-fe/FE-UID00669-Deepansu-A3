import { ComponentProps } from 'react';

import { VariantProps } from 'class-variance-authority';

import { buttonVariants } from './Button.styles';

/**
 * Props available in Button component
 * extended with html button props and button variants
 */
export type ButtonProps = {
    /**
     * If true , the button will render as the immediate child
     */
    asChild?: boolean;
} & ComponentProps<'button'> &
    VariantProps<typeof buttonVariants>;
