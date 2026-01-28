import { lazy, Suspense } from 'react';

import { createBrowserRouter, Outlet } from 'react-router';

import { ERROR_CODES, ErrorFallback, Skeleton } from '@components';
import { ROUTE_PATH } from '@constants';

const HomePage = lazy(() => import('@/pages/Home/Home.page'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound.page'));

export const routes = createBrowserRouter([
    // Todo : Add layout to normal routes
    {
        path: '/',
        element: (
            <Suspense fallback={<Skeleton />}>
                <Outlet />
            </Suspense>
        ),
        errorElement: <ErrorFallback errorCode={ERROR_CODES[500]} />,
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
