import { baseApi } from '@features';

import { MOVIE_LIST } from './movie.constants';
import { MovieListResponse } from './movie.types';

/**
 * Movie Api service
 * Contains all endpoints for the movie service
 */
export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        movieList: builder.query<MovieListResponse, void>({
            query: () => MOVIE_LIST,
        }),
    }),
});

export const { useMovieListQuery } = movieApi;
