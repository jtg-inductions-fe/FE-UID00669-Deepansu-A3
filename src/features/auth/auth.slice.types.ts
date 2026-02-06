/**
 * State shape for the User slice
 */
export type AuthSliceType = {
    /**
     * Access token to access backend (also defines the authentication status of a user)
     */
    access_token: string | null;
};
