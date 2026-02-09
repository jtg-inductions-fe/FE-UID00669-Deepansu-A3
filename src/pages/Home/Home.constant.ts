import { MovieFilters } from '@types';

/**
 * @constant HOME_PAGE_MOVIE_FILTERS - all movie filters required in home page
 */
export const HOME_PAGE_MOVIE_FILTERS: MovieFilters = {
    /**
     * Movies should be latest
     */
    latest: true,
} as const;
