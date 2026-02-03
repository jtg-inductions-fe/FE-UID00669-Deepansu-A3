import { ErrorConfigType } from '@components';
import { ROUTE_PATH } from '@constants';
import Error500Image from '@images/500_error_image.webp';

/**
 * Error Code 500 - config
 */
export const SERVER_ERROR_CONFIG: ErrorConfigType = {
    heading: '500',
    subheading: 'SERVER ERROR',

    buttonText: 'Go back home',
    redirectLink: ROUTE_PATH.HOME,
    mainImageConfig: {
        src: Error500Image,
        alt: 'Something went wrong image',
    },
};
