import { useTheme } from '@/hooks';
import { Button, DetailCard } from '@components';

// Todo : Add Home page contents
/**
 * Home page content
 */
export const HomePage = () => {
    const { theme, toggleTheme } = useTheme();

    // Only testing content
    return (
        <div>
            <Button onClick={toggleTheme}>{theme}</Button>
            Hello World Deepansu
            <DetailCard
                title="Guardians of Galaxy"
                src="/images/400_error_image.webp"
                alt="404 image"
                footer={{
                    subtitle1: '12 Aug 2018',
                    subtitle2: '2h 8m',
                }}
                redirectTo="/newpage"
            />
        </div>
    );
};
