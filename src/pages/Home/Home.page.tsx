import { MovieCarousel, MovieList } from '@containers';

/**
 * Home page content
 */
export default function HomePage() {
    return (
        <div className="font-inter scrollbar-stable">
            <MovieCarousel />
            <MovieList />
        </div>
    );
}
