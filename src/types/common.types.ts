export type City = {
    name: string;
};

export type Movie = {
    id: number;
    name: string;
    banner_image_url?: string;
    image_url: string;
    description: string;
    duration: number;
    release_date: string;
    genres: string[];
    language: string;
};
