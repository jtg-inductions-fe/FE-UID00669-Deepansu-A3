import { ErrorConfigType } from '@components';
import { ROUTE_PATH } from '@constants';
import Error404Image from '@images/404_error_image.webp';

/**
 * Error Code 404 - config
 */
export const NOT_FOUND_ERROR_CONFIG: ErrorConfigType = {
    heading: 'OOPS!',
    subheading: 'PAGE NOT FOUND',

    buttonText: 'Go back home',
    redirectLink: ROUTE_PATH.HOME,
    mainImageConfig: {
        src: Error404Image,
        alt: 'This page does not exist image',
    },
};
