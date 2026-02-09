import { Movie, PaginatedResponse } from '@types';

/**
 * Type for basic details of a movie (in a list)
 */
type MovieListResult = Pick<
    Movie,
    'id' | 'name' | 'image_url' | 'duration' | 'release_date'
>;

/**
 * Type for normal Movie List Response from backend
 */
export type MovieListResponse = PaginatedResponse<MovieListResult>;

/**
 * Type for normal Movie List Response (with banner) from backend
 */
export type MovieListResponseWithBanner = PaginatedResponse<
    MovieListResult & Pick<Movie, 'banner_image_url'>
>;
