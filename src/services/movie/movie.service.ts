import { baseApi } from '@features';
import { MovieFilters } from '@types';

import { MOVIE_BANNERS, MOVIE_LIST } from './movie.constants';
import { MovieListResponse, MovieListResponseWithBanner } from './movie.types';

/**
 * Movie Api service
 * Contains all endpoints for the movie service
 */
export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        movieList: builder.infiniteQuery<
            MovieListResponseWithBanner,
            MovieFilters | void,
            string | null
        >({
            query: ({ queryArg, pageParam }) => {
                if (pageParam) return pageParam;

                if (!queryArg) return MOVIE_LIST;

                const { genres, date, language, latest } = queryArg;

                return {
                    url: MOVIE_LIST,
                    params: {
                        genres: genres?.length ? genres.join(',') : undefined,
                        language: language || undefined,
                        date: date
                            ? new Date(date).toLocaleDateString('en-CA')
                            : undefined,
                        latest: latest ? true : undefined,
                    },
                };
            },
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => lastPage.next,
                getPreviousPageParam: (currentPage) => currentPage.previous,
            },
            transformResponse: (response: MovieListResponse) => {
                const moviesWithBanner = response.results.map(
                    (movie, index) => ({
                        ...movie,
                        banner_image_url: MOVIE_BANNERS[index],
                    }),
                );

                return { ...response, results: moviesWithBanner };
            },
        }),
    }),
});

export const { useMovieListInfiniteQuery } = movieApi;
