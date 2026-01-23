import { Error as ErrorComponent, ERROR_CODES } from '@/components/Error';

/**
 * Not Found Page -> Page to show in case a page does not exist
 */
export const NotFound = () => (
    <main aria-label="Page Not Found">
        <ErrorComponent errorCode={ERROR_CODES[404]} />
    </main>
);
