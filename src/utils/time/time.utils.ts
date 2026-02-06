export const formatMinutesToTimeDelta = (min: number) => {
    if (min < 0) {
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
