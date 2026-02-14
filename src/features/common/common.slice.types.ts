import { City } from '@types';

/**
 * State shape for the Common slice
 */
export type CommonSliceType = {
    /**
     * Global City State
     */
    city: City | null;
};
