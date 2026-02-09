import { useLoginMutation, useRefreshAuthMutation } from '@services';

import { useAppSelector } from './redux.hooks';

/**
 * useAuth Hook (Custom hook)
 * Handles all user authentication related actions
 * and adds an isAuthenticated boolean - representing authentication state of the user
 */
export const useAuth = () => {
    const isAuthenticated = useAppSelector(
        (state) => !!state.auth.access_token,
    );

    return {
        isAuthenticated,
        login: useLoginMutation(),
        refresh: useRefreshAuthMutation(),
    };
};
