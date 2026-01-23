import { UserSliceType } from './user.slice.types';

/**
 * Initial state of the slice based on user slice type
 */
export const USER_SLICE_INITIAL_STATE: UserSliceType = {
    /**
     * User object
     */
    user: null,

    /**
     * Access token for authorization
     */
    access_token: null,
};
