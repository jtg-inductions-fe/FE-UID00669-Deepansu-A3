import { DateConfigType } from '@types';

/**
 * formatDate - Converts the date string to required date format
 * @param dateString - String which need to be converted to date format
 * @param config - intl configuration object for date formatting
 * @returns {string} - formatted string date
 */
export const formatDate = (
    dateString: string,
    config: DateConfigType,
): string => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat(config.locale, config.configObj).format(
        date,
    );
};
