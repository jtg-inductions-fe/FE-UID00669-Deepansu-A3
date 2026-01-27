import { DateConfigs } from './date.config';
import { DateFormatTypes } from './date.types';

/**
 * formatDate - Converts the date string to required date format
 * @param dateString - String which need to be converted to date format
 * @param format - format for the date string to convert to
 * @returns {string} - formatted string date
 */
export const formatDate = (
    dateString: string,
    format: DateFormatTypes = 'DDMMYY',
): string => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat(
        DateConfigs[format].locale,
        DateConfigs[format].configObj,
    ).format(date);
};
