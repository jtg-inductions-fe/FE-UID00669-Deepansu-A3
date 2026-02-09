/**
 * Type of a Movie
 */
export type Movie = {
    /**
     * Id of the Movie
     */
    id: number;

    /**
     * Name of the Movie
     */
    name: string;

    /**
     * Banner image of the Movie
     */
    banner_image_url?: string;

    /**
     * Normal image of the Movie
     */
    image_url: string;

    /**
     * Description of the Movie
     */
    description: string;

    /**
     * Duration of the Movie
     */
    duration: number;

    /**
     * Release Date of the Movie
     */
    release_date: string;

    /**
     * Genres List of the Movie
     */
    genres: string[];

    /**
     * Language of the Movie
     */
    language: string;
};

/**
 * Type of a Movie's Available filters
 */
export type MovieFilters = {
    /**
     * Language we want movies of
     */
    language?: string;

    /**
     * Genres we want movies of
     */
    genres?: string[];

    /**
     * Date on which a movie has slots on
     */
    date?: string;

    /**
     * Whether the movie is latest or not
     */
    latest?: boolean;
};
