import { lazy, Suspense } from 'react';

import { createBrowserRouter, Outlet } from 'react-router';

import { Skeleton } from '@components';
import { ROUTE_PATH } from '@constants';
import { NotFoundPage, ServerErrorPage } from '@pages';

import { RootLayout } from '@layout/RootLayout.layout';

const HomePage = lazy(() => import('@/pages/Home/Home.page'));
const LoginPage = lazy(() => import('@pages/Login/Login.page'));

export const routes = createBrowserRouter([
    // Todo : Add layout to normal routes
    {
        path: '/',
        element: (
            <Suspense fallback={<Skeleton />}>
                <RootLayout>
                    <Outlet />
                </RootLayout>
            </Suspense>
        ),
        errorElement: <ServerErrorPage />,
        children: [
            {
                path: ROUTE_PATH.HOME,
                element: <HomePage />,
            },
        ],
    },
    // No layout routes
    {
        path: ROUTE_PATH.LOGIN,
        errorElement: <ErrorFallback errorCode={ERROR_CODES[500]} />,
        element: (
            <Suspense
                fallback={
                    <div className="h-screen w-screen animate-pulse bg-slate-500"></div>
                }
            >
                <Outlet />,
            </Suspense>
        ),
        children: [
            {
                path: ROUTE_PATH.NOT_FOUND,
                element: <LoginPage />,
            },
        ],
    },
    {
        path: ROUTE_PATH.NOT_FOUND,
        errorElement: <ErrorFallback errorCode={ERROR_CODES[500]} />,
        element: (
            <Suspense
                fallback={
                    <div className="h-screen w-screen animate-pulse bg-slate-500"></div>
                }
            >
                <Outlet />,
            </Suspense>
        ),
        children: [
            {
                path: ROUTE_PATH.NOT_FOUND,
                element: <NotFoundPage />,
            },
        ],
    },
]);
