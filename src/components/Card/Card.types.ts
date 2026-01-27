import { ComponentProps } from 'react';

import { LinkProps } from 'react-router';

/**
 * Props available in card component
 * ,conditionally extended with LinkProps or DivProps(componentProps) based on asLink(prop)
 */
export type CardProps =
    // If asLink is true , extend with LinkProps
    | ({
          asLink: true;
      } & LinkProps)
    //   If asLink is false or undefined , extend with divProps
    | ({ asLink?: false } & ComponentProps<'div'>);
