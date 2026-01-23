import type { UserType } from '@/types/user.types';

/**
 * Type for the details to store in user slice's user object
 */
export type UserDetails = Pick<UserType, 'email' | 'phone_number' | 'name'>;

/**
 * State shape for the User slice
 */
export type UserSliceType = {
    /**
     * User object based on UserType
     */
    user: UserDetails | null;

    /**
     * Access token to access backend (also defines the authentication status of a user)
     */
    access_token: string | null;
};
