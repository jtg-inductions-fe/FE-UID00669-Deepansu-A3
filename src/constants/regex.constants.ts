/**
 * @constant EMAIL_REGEX - Regex for checking if a string is an email or not
 * @example test@gmail.com  -> success
 * @example test@gmail  -> error
 */
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
