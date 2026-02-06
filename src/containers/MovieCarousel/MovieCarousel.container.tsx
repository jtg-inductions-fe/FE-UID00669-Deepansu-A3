import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Skeleton,
} from '@components';
import Image404 from '@images/404_error_image.webp';
import { useMovieListQuery } from '@services';

export const MovieCarousel = () => {
    const { data, isLoading, isError } = useMovieListQuery();

    const movies = data ? data.results : [];

    return (
        <div className="flex justify-center">
            <Carousel className="overflow-hidden">
                <CarouselContent>
                    {isLoading ? (
                        <CarouselItem className="h-120">
                            <Skeleton />
                        </CarouselItem>
                    ) : isError ? (
                        <CarouselItem className="w-screen h-120 flex justify-center items-center">
                            <img
                                src={Image404}
                                className="w-auto h-full"
                                alt="no movies found"
                            />
                        </CarouselItem>
                    ) : (
                        movies.map((movie) => (
                            <CarouselItem
                                key={movie.id}
                                className="min-w-5xl w-screen h-80 md:h-100 lg:h-120 bg-primary/10"
                            >
                                <img
                                    src={movie.image_url}
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
