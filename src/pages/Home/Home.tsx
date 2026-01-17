import { useTheme } from '@/hooks';
import { Card } from '@components';
import { Button } from '@ui_components';

// Todo : Add Home page contents
/**
 * Home page content
 */
export const Home = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <Button onClick={toggleTheme}>{theme}</Button>
            Hello World Deepansu
            <Card
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
