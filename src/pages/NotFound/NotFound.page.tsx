import { ERROR_CODES, ErrorFallback } from '@components';

/**
 * Not Found Page -> Page to show in case a page does not exist
 */
export default function NotFoundPage() {
    return (
        <main aria-label="Page Not Found">
            <ErrorFallback errorCode={ERROR_CODES[404]} />
        </main>
    );
}
