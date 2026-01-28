import { createBrowserRouter } from 'react-router';

import { ROUTE_PATH } from '@constants';
import { HomePage } from '@pages';

export const routes = createBrowserRouter([
    // Todo : Add layout to normal routes
    {
        path: '/',
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
        children: [
            {
                path: ROUTE_PATH.NOT_FOUND,
                // Todo : Replace with real component
                element: <div>Not Found</div>,
            },
        ],
    },
]);
