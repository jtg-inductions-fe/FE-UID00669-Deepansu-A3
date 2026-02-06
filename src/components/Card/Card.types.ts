import { ComponentProps, ComponentPropsWithRef } from 'react';

import { Link } from 'react-router';

/**
 * Props available in card component
 * ,conditionally extended with LinkProps or DivProps(componentProps) based on asLink(prop)
 */
export type CardProps =
    // If asLink is true , extend with LinkProps
    | ({
          asLink: true;
      } & ComponentPropsWithRef<typeof Link>)
    //   If asLink is false or undefined , extend with divProps
    | ({ asLink?: false } & ComponentProps<'div'>);
