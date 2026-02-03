import { ComponentProps } from 'react';

/**
 * Error props contains props that an error component requires
 */
export type ErrorConfigType = {
    /**
     * Image config for main image ( src , alt etc )
     */
    mainImageConfig: ComponentProps<'img'>;

    /**
     * Image config for background image( src , alt etc )
     */
    backgroundImageConfig: ComponentProps<'img'>;

    /**
     * Heading for the component
     */
    heading: string;

    /**
     * Subheading for the component
     */
    subheading: string;

    /**
     * Text of the button inside the component
     */
    buttonText: string;

    /**
     * Redirect Link for the button
     */
    redirectLink: string;
};

export type ErrorProps = {
    /**
     * Error code
     */
    errorConfig: ErrorConfigType;
};
