import { createBrowserRouter } from 'react-router';

import { Error, ERROR_CODES } from '@/components/Error';
import { ROUTE_PATH } from '@constants';
import { Home, NotFound } from '@pages';

export const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error errorCode={ERROR_CODES[500]} />,
        children: [
            {
                path: ROUTE_PATH.HOME,
                element: <Home />,
            },
        ],
    },
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
