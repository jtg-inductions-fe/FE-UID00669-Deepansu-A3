/**
 * Function to convert an integral value to time delta string
 * in format (hm) => 2h 2m
 */
export const formatMinutesToTimeDelta = (min: number) => {
    if (!Number.isFinite(min) || min < 0) {
        throw new Error('Invalid duration');
    }

    const timeDelta: string[] = [];
    const hrs = Math.floor(min / 60);
    const minutes = min % 60;

    if (hrs > 0) timeDelta.push(`${hrs}h`);

    if (minutes > 0) timeDelta.push(`${minutes}m`);

    if (timeDelta.length === 0) return '0m';

    return timeDelta.join(' ');
};
