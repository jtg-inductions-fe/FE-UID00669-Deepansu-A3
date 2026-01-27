import { DateConfigType, DateFormatTypes } from './date.types';

/**
 * DateFormats to config objects map
 * maps all supported date formats to their respective configs
 */
export const DateConfigs = {
    /**
     * Config to convert a date to DDMMYY format ( 2 Nov 2025 )
     */
    DDMMYY: {
        locale: 'en-IN',
        configObj: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        },
    },
} satisfies Record<DateFormatTypes, DateConfigType>;
