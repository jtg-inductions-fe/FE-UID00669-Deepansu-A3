/**
 * Type of a City
 */
export type City = {
    /**
     * Name of the city
     */
    name: string;
};

/**
 * Type of a Language
 */
export type Language = {
    /**
     * Name of the Language
     */
    name: string;
};

/**
 * Type of a Genre
 */
export type Genre = {
    /**
     * Name of the Genre
     */
    name: string;
};

/**
 * Type of a Paginated Response
 */
export type PaginatedResponse<T> = {
    next: string | null;
    previous: string | null;
    results: T[];
};
