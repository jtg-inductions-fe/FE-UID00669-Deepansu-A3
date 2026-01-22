import { ComponentProps } from 'react';

import { ERROR_CODES } from './Error.constants';

/**
 * Extract error codes as type from the error code constant
 */
export type ErrorCodeType = keyof typeof ERROR_CODES;

/**
 * Error props contains props that an error component requires
 */
export interface ErrorConfigType {
    /**
     * Image config for main image ( src , alt etc )
     */
    mainImageConfig: ComponentProps<'img'>;

    /**
     * Image config for background image( src , alt etc )
     */
    backgroundImageConfig?: ComponentProps<'img'>;

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
    buttonText?: string;

    /**
     * Redirect Link for the button
     */
    redirectLink?: string;
}

export interface ErrorProps {
    /**
     * Error code
     */
    errorCode: ErrorCodeType;
}
