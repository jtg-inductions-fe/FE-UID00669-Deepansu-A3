import { ArrowRight } from 'lucide-react';

import { Glow, Link, Typography } from '@components';
import { ROUTE_PATH } from '@constants';
import { MovieCarousel, MovieList } from '@containers';

import { HOME_PAGE_MOVIE_FILTERS } from './Home.constant';

/**
 * Home page
 */
export default function HomePage() {
    return (
        <div className="font-inter scrollbar-stable">
            <MovieCarousel />
            <div className="flex flex-col mx-auto gap-5 py-5 sm:p-5 relative w-full xl:w-8/10">
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
                <MovieList filters={HOME_PAGE_MOVIE_FILTERS} />
            </div>
        </div>
    );
}
