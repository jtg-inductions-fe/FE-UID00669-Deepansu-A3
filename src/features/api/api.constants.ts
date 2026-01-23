/**
 * Backend Url path
 */
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;

/**
 * List of all protected endpoints
 */
export const protectedEndpoints: string[] = [];

/**
 * List of all endpoints where token refresh shouldn't be executed
 * even after 401 error
 */
export const noRefreshTryEndpoints = ['login', 'refreshAuth'];
