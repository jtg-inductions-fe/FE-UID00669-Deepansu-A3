import { ComponentProps } from 'react';

import { DetailCard, Spinner, Typography } from '@components';
import { ERRORS } from '@constants';
import { useInfiniteScroll } from '@hooks';
import { useMovieListInfiniteQuery } from '@services';
import { formatDate, formatMinutesToTimeDelta } from '@utils';

import { MovieListContainerProps } from './MovieList.types';

/**
 * Movie List Container
 */
export const MovieList = ({ filters }: MovieListContainerProps) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useMovieListInfiniteQuery({ ...filters });

    const movies = data?.pages.flatMap((page) => page.results);

    const lastElementRef = useInfiniteScroll({
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <Spinner className="h-20 w-20" />
            </div>
        );
    }

    if (isError) {
        throw new Error(ERRORS[500]);
    }

    if (movies?.length == 0) {
        return (
            <Typography variant="h2" tag="h2">
                No Movies Found
            </Typography>
        );
    }

    return (
        <div className="flex flex-wrap justify-around gap-20 w-fit">
            {movies?.map((movie, movieIndex) => {
                const imageConfig: ComponentProps<'img'> = {
                    src: movie.image_url,
                    alt: movie.name,
                };
                const isLastElement = movieIndex === movies.length - 1;

                return (
                    <DetailCard
                        ref={isLastElement ? lastElementRef : null}
                        key={movie.id}
                        title={movie.name}
                        redirectTo={`${encodeURI(movie.name)}-${movie.id}`}
                        mainImageProps={imageConfig}
                        footer={{
                            subtitle1: formatDate(movie.release_date, 'DDMMYY'),
                            subtitle2: formatMinutesToTimeDelta(movie.duration),
                        }}
                    />
                );
            })}
        </div>
    );
};
