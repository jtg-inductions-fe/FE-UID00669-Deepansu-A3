import { Link } from 'react-router';

import { Button, DetailCard } from '@components';

// Todo : Add Home page contents
/**
 * Home page content
 */
export const HomePage = () => (
    // Only testing content
    <div>
        <Button>
            <Link to="/newpage">Hello</Link>
        </Button>
        Hello World Deepansu
        <DetailCard
            title="Guardians of Galaxy"
            mainImageProps={{
                src: '/images/400_error_image.webp',
                alt: '404 image',
            }}
            footer={{
                subtitle1: '12 Aug 2018',
                subtitle2: '2h 8m',
            }}
            redirectTo="/newpage"
        />
    </div>
);
