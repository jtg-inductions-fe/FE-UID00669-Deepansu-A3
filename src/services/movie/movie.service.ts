import { baseApi } from '@features';

import { MOVIE_BANNER_RESPONSE, MOVIE_LIST } from './movie.constants';
import { MovieListResponse, MovieListResponseWithBanner } from './movie.types';

/**
 * Movie Api service
 * Contains all endpoints for the movie service
 */
export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        movieBannerList: builder.query<MovieListResponseWithBanner, void>({
            queryFn: (): { data: MovieListResponseWithBanner } => ({
                data: MOVIE_BANNER_RESPONSE,
            }),
        }),
        movieList: builder.infiniteQuery<
            MovieListResponse,
            void,
            string | null
        >({
            query: ({ pageParam }) => {
                if (pageParam) return pageParam;

                return MOVIE_LIST;
            },
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => lastPage.next,
                getPreviousPageParam: (currentPage) => currentPage.previous,
            },
        }),
    }),
});

export const { useMovieBannerListQuery, useMovieListInfiniteQuery } = movieApi;
