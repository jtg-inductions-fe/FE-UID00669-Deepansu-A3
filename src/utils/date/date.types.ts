import { DATE_FORMATS } from './date.constants';

/**
 * Type for union of all supported date formats
 */
export type DateFormatTypes = keyof typeof DATE_FORMATS;

/**
 * Type for the date config object
 */
export type DateConfigType = {
    /**
     * Locale for the date format
     */
    locale: string;

    /**
     * Config object required for the formatting of the date (INTL date format options object)
     */
    configObj: Intl.DateTimeFormatOptions;
};
