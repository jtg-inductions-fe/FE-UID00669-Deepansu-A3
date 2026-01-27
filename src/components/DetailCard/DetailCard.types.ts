import { ComponentProps } from 'react';

/**
 * Props available in a card
 * (extends image props - for the main image of the card)
 */
export type DetailCardProps = {
    /**
     * Main image contains all standard html attributes for images
     */
    mainImageProps: ComponentProps<'img'>;

    /**
     * Title for the card
     */
    title: string;

    /**
     * Footer content for the card
     */
    footer?: {
        /**
         * Subtitle1 content for the card
         */
        subtitle1: string;

        /**
         * Subtitle2 content for the card
         */
        subtitle2: string;
    };

    /**
     * Page to redirect to on click
     */
    redirectTo: string;
};
