import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Skeleton,
} from '@components';
import { ERRORS } from '@constants';
import Image404 from '@images/404_error_image.webp';
import { useMovieListInfiniteQuery } from '@services';

/**
 * Movie Carousel Container
 */
export const MovieCarousel = () => {
    const { data, isLoading, isError } = useMovieListInfiniteQuery();

    if (isError) throw new Error(ERRORS[500]);

    const movies = data?.pages[0].results;

    return (
        <div className="flex justify-center">
            <Carousel className="overflow-hidden">
                <CarouselContent>
                    {isLoading ? (
                        <CarouselItem className="h-120">
                            <Skeleton />
                        </CarouselItem>
                    ) : movies?.length === 0 ? (
                        <CarouselItem className="w-screen h-120 flex justify-center items-center">
                            <img
                                src={Image404}
                                className="w-auto h-full"
                                alt="no movies found"
                            />
                        </CarouselItem>
                    ) : (
                        movies?.map((movie) => (
                            <CarouselItem
                                key={movie.id}
                                className="min-w-5xl w-screen h-80 md:h-100 lg:h-120 bg-primary/10"
                            >
                                <img
                                    src={movie.banner_image_url}
                                    className="w-full h-full"
                                    alt={movie.name}
                                />
                            </CarouselItem>
                        ))
                    )}
                </CarouselContent>
                <CarouselPrevious variant="default" />
                <CarouselNext variant="default" />
            </Carousel>
        </div>
    );
};
