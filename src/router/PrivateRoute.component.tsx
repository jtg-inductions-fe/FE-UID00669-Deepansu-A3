import { useEffect } from 'react';

import { Navigate, Outlet, useLocation } from 'react-router';

import { Skeleton } from '@components';
import { ROUTE_PATH } from '@constants';
import { setIsAuthenticated } from '@features';
import { useAppDispatch, useAppSelector } from '@hooks';
import { useRefreshAuthMutation } from '@services';

/**
 * Private Route Component
 * Works as an auth guard for protected routes
 * and redirects user to the login page (with current url as from state)
 */
export const PrivateRoute = () => {
    const accessToken = useAppSelector((state) => state.user.access_token);

    const [refresh, { isError, isSuccess }] = useRefreshAuthMutation();
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        const tryRefreshAuth = async () => {
            await refresh(null)
                .unwrap()
                .then((response) => {
                    dispatch(setIsAuthenticated(response.access));
                });
        };

        if (!accessToken) void tryRefreshAuth();
    }, [accessToken, dispatch, refresh]);

    if (isError)
        return (
            <Navigate
                to={ROUTE_PATH.LOGIN}
                state={{ from: location }}
                replace
            />
        );

    if (accessToken || isSuccess) return <Outlet />;

    return <Skeleton />;
};
