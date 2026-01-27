import { Link } from 'react-router';

import {
    Card as UICard,
    CardContent,
    CardFooter,
    CardHeader,
    Typography,
} from '@components';

import { DetailCardProps } from './DetailCard.types';

/**
 * Custom Card Component
 * @param props - {@link DetailCardProps}
 */
export const DetailCard = (props: DetailCardProps) => {
    const { title, footer, redirectTo, mainImageProps } = props;

    return (
        <UICard className="w-64" asChild>
            <Link to={redirectTo}>
                <CardHeader>
                    {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is passed via imageProps spread */}
                    <img {...mainImageProps} />
                </CardHeader>
                <CardContent>
                    <span>{title}</span>
                </CardContent>
                {footer && (
                    <CardFooter>
                        <Typography variant="muted">
                            {footer.subtitle1}
                        </Typography>
                        <Typography variant="muted">
                            {footer.subtitle2}
                        </Typography>
                    </CardFooter>
                )}
            </Link>
        </UICard>
    );
};
