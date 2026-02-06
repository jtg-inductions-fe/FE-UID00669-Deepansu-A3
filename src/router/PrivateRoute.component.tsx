import { useEffect } from 'react';

import { Navigate, Outlet, useLocation } from 'react-router';

import { Skeleton } from '@components';
import { ROUTE_PATH } from '@constants';
import { useAuth } from '@hooks';

/**
 * Private Route Component
 * Works as an auth guard for protected routes
 * and redirects user to the login page (with current url as from state)
 */
export const PrivateRoute = () => {
    const {
        isAuthenticated,
        refresh: [refresh, { isError, isSuccess }],
    } = useAuth();

    const location = useLocation();

    useEffect(() => {
        // If the user is unauthenticated => calls the refresh action
        if (!isAuthenticated) void refresh();
    }, [isAuthenticated, refresh]);

    // If refresh fails => Navigate the user to login page
    if (isError)
        return (
            <Navigate
                to={ROUTE_PATH.LOGIN}
                state={{ from: location }}
                replace
            />
        );

    // If the user is Authenticated or the refresh action results in success
    // => Render the child
    if (isAuthenticated || isSuccess) return <Outlet />;

    return <Skeleton />;
};
