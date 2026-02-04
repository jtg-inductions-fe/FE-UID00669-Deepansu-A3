import { UserType } from '@types';

/**
 * Login Request Type
 * Contains email and password type from user type
 */
export type LoginRequest = Pick<UserType, 'email' | 'password'>;

/**
 * Auth Response Type
 * Contains fields for a response sent by any api endpoint
 * returning auth tokens
 */
export type AuthResponse = {
    /**
     * Access token string received in the response
     */
    access: string;
};

/**
 * Signup Request Type
 * Extends UserType with a confirm_password field for signup validation
 */
export type SignupRequest = UserType & { confirm_password: string };

/**
 * User Details Response Type
 * Contains email , name and phone type from user type
 */
export type UserDetailsResponse = Pick<UserType, 'email' | 'name' | 'phone'>;
