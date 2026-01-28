import { Button, DetailCard } from '@components';

import Error404Image from '/images/404_error_image.webp';

// Todo : Add Home page contents
/**
 * Home page content
 */
export default function HomePage() {
    // Only testing content
    return (
        <div className="font-inter">
            <Button asLink to="/ewewe">
                afasff
            </Button>
            Hello World Deepansu
            <DetailCard
                title="Guardians of Galaxy"
                mainImageProps={{
                    src: Error404Image,
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
}
