import * as React from 'react';

import { VariantProps } from 'class-variance-authority';
import { type LinkProps } from 'react-router';

import { buttonVariants } from './Button.styles';

/**
 * Props available in Button component
 * Conditionally expands with link props or html button props based on a prop(asLink)
 */
export type ButtonProps =
    // If as link is true extend with link props and button variants
    | ({ asLink: true } & LinkProps & VariantProps<typeof buttonVariants>)
    // Otherwise extend with button props and button variants
    | ({ asLink?: false } & React.ComponentProps<'button'> &
          VariantProps<typeof buttonVariants>);
