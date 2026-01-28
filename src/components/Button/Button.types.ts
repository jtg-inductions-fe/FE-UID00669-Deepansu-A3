import { ComponentProps } from 'react';

import { VariantProps } from 'class-variance-authority';
import { LinkProps } from 'react-router';

import { buttonVariants } from './Button.styles';

/**
 * Props available in Button component
 * ,extended with button variants from styles
 * ,conditionally extended with LinkProps or ButtonProps(componentProps) based on asLink(prop)
 */
export type ButtonProps = VariantProps<typeof buttonVariants> &
    // If asLink is true , extend with LinkProps
    (| ({
              asLink: true;
          } & LinkProps)
        //   If asLink is false or undefined , extend with buttonProps
        | ({ asLink?: false } & ComponentProps<'button'>)
    );
