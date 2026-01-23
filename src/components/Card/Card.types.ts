import { type LinkProps } from 'react-router';

/**
 * Props available in card component
 */
export type CardProps =
    // If as link is true extend with link props
    | ({ asLink: true } & LinkProps)
    // Otherwise extend with div props
    | ({ asLink?: false } & React.ComponentProps<'div'>);
