import { ErrorFallback } from '@components';

import { NOT_FOUND_ERROR_CONFIG } from './NotFound.config';

/**
 * Not Found Page -> Page to show in case a page does not exist
 */
export default function NotFoundPage() {
    return (
        <main aria-label="Page Not Found">
            <ErrorFallback errorConfig={NOT_FOUND_ERROR_CONFIG} />
        </main>
    );
}
