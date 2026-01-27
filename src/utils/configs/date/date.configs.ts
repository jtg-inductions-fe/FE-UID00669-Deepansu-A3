import { DateConfigType } from './date.types';

/**
 * Config to convert a date to DDMMYY format ( 2 Nov 2025 )
 */
export const DDMMYY: DateConfigType = {
    locale: 'en-IN',
    configObj: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    },
};
