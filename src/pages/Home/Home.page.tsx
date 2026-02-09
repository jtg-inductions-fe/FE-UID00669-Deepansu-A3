import { MovieCarousel, MovieList } from '@containers';

/**
 * Home page
 */
export default function HomePage() {
    return (
        <div className="font-inter scrollbar-stable">
            <MovieCarousel />
            <MovieList filters={{ latest: true }} />
        </div>
    );
}
