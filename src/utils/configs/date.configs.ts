/**
 * Type for the date config object
 */
export interface DateConfigType {
    locale: string;
    configObj: Intl.DateTimeFormatOptions;
}

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
