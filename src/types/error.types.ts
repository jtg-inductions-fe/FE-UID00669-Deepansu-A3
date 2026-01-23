import { ERRORS } from '@constants';

export type ErrorTypes = keyof typeof ERRORS;

/**
 * API Error Type
 * Type definition for any API error
 */
export type ApiErrorType = {
    /**
     * Data for the error
     */
    data: {
        /**
         * Actual error message
         */
        detail: string;
    };

    /**
     * Status Code for the error
     */
    status: ErrorTypes;
};
