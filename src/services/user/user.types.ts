import { UserType } from '@types';

/**
 * Login Request Type
 * Contains email and password type from user type
 */
export type LoginRequest = Pick<UserType, 'email' | 'password'>;

/**
 * Auth Response Type
 * Response returned by any api endpoint
 * returning auth tokens
 */
export type AuthResponse = {
    /**
     * Access token string received in the response
     */
    access: string;
};
