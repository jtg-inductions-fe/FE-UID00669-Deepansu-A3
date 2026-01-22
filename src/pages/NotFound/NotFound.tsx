import { ERROR_CODES } from '@/components/Error';
import { Error } from '@components';

/**
 * Not Found Page -> Page to show in case a page does not exist
 */
export const NotFound = () => (
    <main>
        <Error errorCode={ERROR_CODES[404]} />
    </main>
);
