import { ComponentProps } from 'react';

/**
 * Props available in card component
 * extended with html div props
 */
export type CardProps = {
    /**
     * If true , the button will render as the immediate child
     */
    asChild?: boolean;
} & ComponentProps<'div'>;
