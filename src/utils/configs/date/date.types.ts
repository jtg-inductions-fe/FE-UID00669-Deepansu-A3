/**
 * Type for the date config object
 */
export interface DateConfigType {
    /**
     * Locale for the date format
     */
    locale: string;

    /**
     * Config object required for the formatting of the date (INTL date format options object)
     */
    configObj: Intl.DateTimeFormatOptions;
}
