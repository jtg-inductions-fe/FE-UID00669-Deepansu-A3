import { ComponentProps } from 'react';

/**
 * Props available in a card
 * (extends image props - for the main image of the card)
 */
export interface DetailCardProps extends ComponentProps<'img'> {
    /**
     * Title for the card
     */
    title: string;

    /**
     * Footer content for the card
     */
    footer?: {
        /**
         * Subtitle1 content
         */
        subtitle1: string;

        /**
         * Subtitle2 content
         */
        subtitle2: string;
    };

    /**
     * Page to redirect to on click
     */
    redirectTo: string;
}
