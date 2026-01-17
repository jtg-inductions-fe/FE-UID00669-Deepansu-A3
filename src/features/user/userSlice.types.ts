import type { UserType } from '@types';

/**
 * Props a User slice can have
 */
export interface UserSliceType {
    /**
     * User object based on UserType
     */
    user: UserType | null;
}
