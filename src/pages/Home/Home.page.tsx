import { MovieCarousel, MovieList } from '@containers';

import { HOME_PAGE_MOVIE_FILTERS } from './Home.constant';

/**
 * Home page
 */
export default function HomePage() {
    return (
        <div className="font-inter scrollbar-stable">
            <MovieCarousel />
            <MovieList filters={HOME_PAGE_MOVIE_FILTERS} />
        </div>
    );
}
