import { AuthSliceType } from './auth.slice.types';

/**
 * Initial state of the slice based on user slice type
 */
export const AUTH_SLICE_INITIAL_STATE: AuthSliceType = {
    /**
     * Access token for authorization
     */
    access_token: null,
};
