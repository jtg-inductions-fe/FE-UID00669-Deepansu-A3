import { lazy, Suspense } from 'react';

import { createBrowserRouter, Outlet } from 'react-router';

import { Skeleton } from '@components';
import { ROUTE_PATH } from '@constants';
import { NotFoundPage, ServerErrorPage } from '@pages';

const HomePage = lazy(() => import('@/pages/Home/Home.page'));

export const routes = createBrowserRouter([
    // Todo : Add layout to normal routes
    {
        path: '/',
        element: (
            <Suspense fallback={<Skeleton />}>
                <Outlet />
            </Suspense>
        ),
        errorElement: <ServerErrorPage />,
        children: [
            {
                path: ROUTE_PATH.HOME,
                element: <HomePage />,
            },
            {
                path: ROUTE_PATH.NOT_FOUND,
                element: <NotFoundPage />,
            },
        ],
    },
]);
