import { lazy, Suspense } from 'react';

import { createBrowserRouter, Outlet } from 'react-router';

import { Skeleton } from '@components';
import { ROUTE_PATH } from '@constants';
import { RootLayout } from '@layout';
import { NotFoundPage, ServerErrorPage } from '@pages';

import { PrivateRoute } from './PrivateRoute.component';

const HomePage = lazy(() => import('@pages/Home/Home.page'));
const LoginPage = lazy(() => import('@pages/Login/Login.page'));

export const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Skeleton />}>
                <Outlet />
            </Suspense>
        ),
        errorElement: <ServerErrorPage />,
        children: [
            // Private Routes
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/private',
                        element: <div>Private Page</div>,
                    },
                ],
            },

            // Public Routes
            {
                // Public routes with layout
                element: <RootLayout />,
                children: [
                    {
                        path: ROUTE_PATH.HOME,
                        element: <HomePage />,
                    },
                ],
            },
            {
                path: ROUTE_PATH.LOGIN,
                element: <LoginPage />,
            },
            {
                path: ROUTE_PATH.NOT_FOUND,
                element: <NotFoundPage />,
            },
        ],
    },
]);
