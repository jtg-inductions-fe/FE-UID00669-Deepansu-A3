import {
    Card as UICard,
    CardContent,
    CardFooter,
    CardHeader,
} from '@components/Card';
import { Typography } from '@components/Typography';

import { DetailCardProps } from './DetailCard.types';

/**
 * Custom Card Component
 * @param props - {@link DetailCardProps}
 */
export const DetailCard = (props: DetailCardProps) => {
    const { title, footer, redirectTo, mainImageProps } = props;

    return (
        <UICard asLink={true} to={redirectTo} className="w-64 pb-5">
            <CardHeader className="w-full max-h-2/3 rounded-xl overflow-hidden mb-2 px-0">
                <img
                    {...mainImageProps}
                    alt={mainImageProps.alt || 'Card Main Image'}
                />
            </CardHeader>
            <CardContent className="px-0">
                <span>{title}</span>
            </CardContent>
            {footer && (
                <CardFooter className="justify-between px-0">
                    <Typography variant="muted">{footer.subtitle1}</Typography>
                    <Typography variant="muted">{footer.subtitle2}</Typography>
                </CardFooter>
            )}
        </UICard>
    );
};
