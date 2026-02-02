import { ErrorFallback } from '@components';

import { SERVER_ERROR_CONFIG } from './ServerError.config';

/**
 * Server Error Page -> Page to show in case an error comes in a page
 */
export default function ServerErrorPage() {
    return (
        <main aria-label="Server Error">
            <ErrorFallback errorConfig={SERVER_ERROR_CONFIG} />
        </main>
    );
}
