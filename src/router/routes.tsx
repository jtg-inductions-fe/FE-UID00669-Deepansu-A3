import { lazy, Suspense } from 'react';

import { ROUTE_PATH } from '@constants';
import { HomePage, NotFound } from '@pages';
import { ErrorFallback, ERROR_CODES } from '@components';
import { createBrowserRouter, Outlet } from 'react-router';


const HomePage = lazy(() => import('@/pages/Home/Home.page'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound.page'));

export const routes = createBrowserRouter([
    // Todo : Add layout to normal routes
    {
        path: '/',
        element: (
            <Suspense
                fallback={
                    <div className="h-screen w-screen animate-pulse bg-slate-500"></div>
                }
            >
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
