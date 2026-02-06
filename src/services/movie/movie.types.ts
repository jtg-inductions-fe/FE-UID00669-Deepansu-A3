import { Movie } from '@types';

export type MovieListResponse = {
    next: string | null;
    previous: string | null;
    results:
        | Pick<
              Movie,
              'id' | 'name' | 'image_url' | 'duration' | 'release_date'
          >[]
        | [];
};
