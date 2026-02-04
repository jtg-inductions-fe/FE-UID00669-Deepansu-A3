import { baseApi } from '@features';

import { CITIES_URL } from './common.constant';
import { CityResponse } from './common.types';

/**
 * Common Api service
 * Contains all endpoint common for the app
 */
export const commonApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        citiesList: builder.query<CityResponse, void>({
            query: () => CITIES_URL,
        }),
    }),
});

export const { useCitiesListQuery, useLazyCitiesListQuery } = commonApi;
