/**
 * @constant EMAIL_REGEX - Regex for checking if a string is an email or not
 * @example test@gmail.com  -> success
 * @example test@gmail  -> error
 */
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

/**
 * @constant PHONE_NUMBER_REGEX - Regex for checking if a string is a valid phone number or not
 * @example 9999999999  -> success
 * @example 9999  -> error
 */
export const PHONE_NUMBER_REGEX = /^\+?1?\d{9,15}$/;

/**
 * @constant PHONE_NUMBER_REGEX - Regex for checking if a string is a valid password or not
 * @example admin@123  -> success
 * @example admin  -> error
 */
export const PASSWORD_REGEX = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
