import { lazy, Suspense } from 'react';

import { createBrowserRouter } from 'react-router';

import { Skeleton } from '@components';
import { ROUTE_PATH } from '@constants';
import { RootLayout } from '@layout';
import { NotFoundPage, ServerErrorPage } from '@pages';

import { PrivateRoute } from './PrivateRoute.component';

const HomePage = lazy(() => import('@pages/Home/Home.page'));
const LoginPage = lazy(() => import('@pages/Login/Login.page'));
const SignupPage = lazy(() => import('@pages/Signup/Signup.page'));

export const routes = createBrowserRouter([
    {
        path: '/',
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
                path: '/',
                // Public routes with layout
                element: <RootLayout />,
                children: [
                    {
                        path: ROUTE_PATH.HOME,
                        element: (
                            <Suspense fallback={<Skeleton />}>
                                <HomePage />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: ROUTE_PATH.LOGIN,
                element: (
                    <Suspense fallback={<Skeleton />}>
                        <LoginPage />
                    </Suspense>
                ),
            },
            {
                path: ROUTE_PATH.SIGNUP,
                element: (
                    <Suspense fallback={<Skeleton />}>
                        <SignupPage />
                    </Suspense>
                ),
            },
            {
                path: ROUTE_PATH.NOT_FOUND,
                element: <NotFoundPage />,
            },
        ],
    },
]);
