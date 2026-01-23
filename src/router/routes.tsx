import { createBrowserRouter } from 'react-router';

import { ROUTE_PATH } from '@constants';
import { Home } from '@pages';

export const routes = createBrowserRouter([
    // Todo : Add layout to normal routes
    {
        path: '/',
        children: [
            {
                path: ROUTE_PATH.HOME,
                element: <Home />,
            },
        ],
    },
    // No layout routes
    {
        path: ROUTE_PATH.NOT_FOUND,
        children: [
            {
                path: ROUTE_PATH.NOT_FOUND,
                element: <div>Not Found</div>,
            },
        ],
    },
]);
