import { createBrowserRouter } from 'react-router';

import { ROUTE_PATH } from '@constants';
import { HomePage, NotFound } from '@pages';
import { Error, ERROR_CODES } from '@components';

export const routes = createBrowserRouter([
    // Todo : Add layout to normal routes
    {
        path: '/',
        errorElement: <Error errorCode={ERROR_CODES[500]} />,
        children: [
            {
                path: ROUTE_PATH.HOME,
                element: <HomePage />,
            },
        ],
    },
    // No layout routes
    {
        path: ROUTE_PATH.NOT_FOUND,
        errorElement: <Error errorCode={ERROR_CODES[500]} />,
        children: [
            {
                path: ROUTE_PATH.NOT_FOUND,
                element: <NotFound />,
            },
        ],
    },
]);
