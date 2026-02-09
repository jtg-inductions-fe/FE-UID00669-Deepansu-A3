import { useEffect, useRef } from 'react';

/**
 * Props required by the Infinite scroll hook
 */
type InfiniteScrollProps = {
    /**
     * Function to call to handle fetching next page
     */
    fetchNextPage: () => Promise<unknown>;

    /**
     * Boolean Flag for whether there is a next page or not
     */
    hasNextPage: boolean;

    /**
     * Boolean Flag for whether there the fetching is in progress or not
     */
    isFetchingNextPage: boolean;

    /**
     * Config object for the intersection observer
     */
    observerConfig?: IntersectionObserverInit;
};

const DEFAULT_OBSERVER_CONFIG: IntersectionObserverInit = {
    rootMargin: '200px',
    threshold: 0,
};

/**
 * useInfiniteScroll - custom hook
 * Uses intersection observer to check if the user is at the end of the page
 * => calls fetchNextPage
 */
export const useInfiniteScroll = <T extends Element = HTMLAnchorElement>({
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    observerConfig = DEFAULT_OBSERVER_CONFIG,
}: InfiniteScrollProps) => {
    const element = useRef<T | null>(null);

    useEffect(() => {
        if (!hasNextPage) {
            return;
        }
        // Creates an observer
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isFetchingNextPage) {
                void fetchNextPage();
            }
        }, observerConfig);

        // If there is an element => observer that element
        if (element.current) {
            observer.observe(element.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [hasNextPage, fetchNextPage, isFetchingNextPage, observerConfig]);

    return element;
};
