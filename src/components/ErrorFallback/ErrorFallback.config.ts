import { ErrorCodeType, ErrorConfigType } from './ErrorFallback.types';

import Error404Image from '/images/404_error_image.webp';
import Error500Image from '/images/500_error_image.webp';
import ErrorBackground from '/images/error_background.webp';

/**
 * Config for different error codes
 */
export const ERROR_CONFIG = {
    /**
     * Error Code 500 - config
     */
    500: {
        heading: '500',
        subheading: 'SERVER ERROR',

        buttonText: 'Go back home',
        redirectLink: '/',
        mainImageConfig: {
            src: Error500Image,
            alt: 'Something went wrong image',
        },

        backgroundImageConfig: {
            src: ErrorBackground,
        },
    },

    /**
     * Error code 404 - config
     */
    404: {
        heading: 'OOPS!',
        subheading: 'PAGE NOT FOUND',

        buttonText: 'Go back home',
        redirectLink: '/',
        mainImageConfig: {
            src: Error404Image,
            alt: 'This page does not exist image',
        },
        backgroundImageConfig: {
            src: ErrorBackground,
        },
    },
} satisfies Record<ErrorCodeType, ErrorConfigType>;
