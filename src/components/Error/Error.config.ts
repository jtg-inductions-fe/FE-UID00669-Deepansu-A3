import { ErrorCodeType, ErrorConfigType } from './Error.types';

/**
 * Config for different error codes
 */
export const ERROR_CONFIG = {
    /**
     * Error Code 500 - config
     */
    500: {
        heading: '505',
        subheading: 'SERVER ERROR',

        buttonText: 'Go back home',
        redirectLink: '/',
        mainImageConfig: {
            src: '/images/505_error_image.webp',
            alt: 'Something went wrong image',
        },

        backgroundImageConfig: {
            src: '/images/error_background.webp',
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
            src: '/images/400_error_image.webp',
            alt: 'This page does not exist image',
        },
        backgroundImageConfig: {
            src: '/images/error_background.webp',
        },
    },
} satisfies Record<ErrorCodeType, ErrorConfigType>;
