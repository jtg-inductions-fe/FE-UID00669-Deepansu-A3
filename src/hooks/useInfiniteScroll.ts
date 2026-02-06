import { useEffect, useRef } from 'react';

type InfiniteScrollProps = {
    fetchNextPage: () => Promise<unknown>;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    observerConfig?: IntersectionObserverInit;
};

export const useInfiniteScroll = <T extends Element = HTMLAnchorElement>({
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    observerConfig = { rootMargin: '200px', threshold: 0 },
}: InfiniteScrollProps) => {
    const element = useRef<T | null>(null);

    useEffect(() => {
        if (!hasNextPage) {
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isFetchingNextPage) {
                void fetchNextPage();
            }
        }, observerConfig);

        if (element.current) {
            observer.observe(element.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [hasNextPage, fetchNextPage]);

    return element;
};
