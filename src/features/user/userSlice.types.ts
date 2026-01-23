import type { UserType } from '@types';

/**
 * State shape for the User slice
 */
export interface UserSliceType {
    /**
     * User object based on UserType
     */
    user: UserType | null;
}
