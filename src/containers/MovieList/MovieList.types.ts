import { MovieFilters } from '@types';

/**
 * Props Required by Movie List Container
 */
export type MovieListContainerProps = {
    /**
     * Filters required by the container
     */
    filters?: MovieFilters;
};
