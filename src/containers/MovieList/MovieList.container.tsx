import { ComponentProps } from 'react';

import { ArrowRight } from 'lucide-react';

import { DetailCard, Glow, Link, Spinner, Typography } from '@components';
import { ERRORS, ROUTE_PATH } from '@constants';
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

    if (isError) {
        throw new Error(ERRORS[500]);
    }

    return (
        <div className="flex flex-col mx-auto gap-5 p-5 relative xl:w-8/10">
            <Glow className="w-20 h-20" />
            <Glow className="bottom-0 right-0" />
            <div className="flex justify-between flex-wrap">
                <Typography tag="h1" variant="h1">
                    Latest Movies
                </Typography>
                <Link to={ROUTE_PATH.MOVIES} variant="default">
                    <Typography variant="span" tag="span">
                        View All
                    </Typography>
                    <ArrowRight />
                </Link>
            </div>
            {isLoading ? (
                <div className="flex justify-center">
                    <Spinner className="h-20 w-20" />
                </div>
            ) : (
                movies?.length == 0 && (
                    <Typography variant="h2" tag="h2">
                        No Movies Found
                    </Typography>
                )
            )}
            <div className="flex flex-wrap justify-around xl:justify-between gap-20">
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
                                subtitle1: formatDate(
                                    movie.release_date,
                                    'DDMMYY',
                                ),
                                subtitle2: formatMinutesToTimeDelta(
                                    movie.duration,
                                ),
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};
