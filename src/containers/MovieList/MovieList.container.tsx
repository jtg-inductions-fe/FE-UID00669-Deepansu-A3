import { ComponentProps } from 'react';

import { ArrowRight } from 'lucide-react';

import { DetailCard, Glow, Link, Typography } from '@components';
import { ROUTE_PATH } from '@constants';
import { useInfiniteScroll } from '@hooks';
import { useMovieListInfiniteQuery } from '@services';
import { formatDate, formatMinutesToTimeDelta } from '@utils';

import { MovieListContainerProps } from './MovieList.types';

/**
 * Movie List Container
 */
export const MovieList = ({ filters }: MovieListContainerProps) => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useMovieListInfiniteQuery({ ...filters });

    const pages = data ? data.pages : [];

    const lastElementRef = useInfiniteScroll({
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    });

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
            <div className="flex flex-wrap justify-around xl:justify-between gap-20">
                {pages.map((page, pageIndex) =>
                    page.results.map((movie, movieIndex) => {
                        const imageConfig: ComponentProps<'img'> = {
                            src: movie.image_url,
                            alt: movie.name,
                        };
                        const isLastElement =
                            pageIndex === pages.length - 1 &&
                            movieIndex === page.results.length - 1;

                        return (
                            <DetailCard
                                ref={isLastElement ? lastElementRef : null}
                                key={movie.id}
                                title={movie.name}
                                redirectTo={`${movie.name}-${movie.id}`}
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
                    }),
                )}
            </div>
        </div>
    );
};
