import { type LinkProps } from 'react-router';

/**
 * Props available in card component
 * Conditionally expands with link props or html div props based on a prop(asLink)
 */
export type CardProps =
    // If as link is true extend with link props
    | ({ asLink: true } & LinkProps)
    // Otherwise extend with div props
    | ({ asLink?: false } & React.ComponentProps<'div'>);
