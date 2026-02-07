import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './basequery.slice';

/**
 * baseApi - API to add all required endpoints to
 */
export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['User'],
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
