/**
 * Backend Url path imported from environment variable
 */
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;

// Throws error if VITE_BACKEND_URL is not defined in env variables
if (!VITE_BACKEND_URL) {
    throw new Error('BACKEND_URL not defined');
}

/**
 * Backend Url path
 */
export const BACKEND_URL = VITE_BACKEND_URL;

/**
 * List of all protected endpoints
 */
export const protectedEndpoints: string[] = [];

/**
 * List of all endpoints where token refresh shouldn't be executed
 * even after 401 error
 */
export const noRefreshTryEndpoints = ['login', 'refreshAuth'];
