import { UserType } from '@types';

/**
 * Login Request Type
 * Contains email and password type from user type
 */
export type LoginRequest = Pick<UserType, 'email' | 'password'>;

/**
 * Login Response Type
 */
export type LoginResponse = {
    /**
     * Access token string received in the response
     */
    access: string;
};

/**
 * Refresh Auth Response Type
 */
export type RefreshAuthResponse = {
    /**
     * Access token string received in the response
     */
    access: string;
};
