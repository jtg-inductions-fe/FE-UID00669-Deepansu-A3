import { ERRORS } from '@constants';

export type ErrorTypes = keyof typeof ERRORS;

/**
 * API Error Type
 * Type definition for any API error
 */
export type ApiErrorType<T> = {
    /**
     * Data for the error
     */
    data: T;

    /**
     * Status Code for the error
     */
    status: ErrorTypes;
};
