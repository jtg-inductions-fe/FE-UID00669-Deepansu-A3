import { useEffect, useRef } from 'react';

/**
 * Return type for a timeout
 */
type Timer = ReturnType<typeof setTimeout>;

/**
 * useDebounce Hook (Custom hook)
 * Handles debouncing any function call
 * runs the debounced function only if the function has not run in last (delay) milliseconds
 */
export const useDebounce = <Args extends unknown[]>(
    func: (...args: Args) => void,
    delay = 1000,
) => {
    const timer = useRef<Timer>(null);

    useEffect(
        () => () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        },
        [],
    );

    return (...args: Args) => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
