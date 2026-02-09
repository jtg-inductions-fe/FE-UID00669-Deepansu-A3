import {
    Card as UICard,
    CardContent,
    CardFooter,
    CardHeader,
} from '@components/Card';
import { Typography } from '@components/Typography';
import { cn } from '@utils';

import { DetailCardProps } from './DetailCard.types';

/**
 * Custom Card Component
 * @param props - {@link DetailCardProps}
 */
export const DetailCard = (props: DetailCardProps) => {
    const { title, footer, redirectTo, mainImageProps, className, ref } = props;

    return (
        <UICard
            ref={ref}
            asLink={true}
            to={redirectTo}
            className={cn(
                'w-72 pb-5 bg-primary/5 border hover:scale-105 transition-transform',
                className,
            )}
        >
            <CardHeader className="h-56 rounded-[0.625rem] overflow-hidden mb-2 px-0">
                <img
                    {...mainImageProps}
                    className="h-full w-full object-cover object-center bg-primary/10"
                    alt={mainImageProps.alt || 'Card Main Image'}
                />
            </CardHeader>
            <CardContent className="px-0">
                <Typography variant="span">{title}</Typography>
            </CardContent>
            {footer && (
                <CardFooter className="justify-between px-0">
                    <Typography variant="muted" color="muted">
                        {footer.subtitle1}
                    </Typography>
                    <Typography variant="muted" color="muted">
                        {footer.subtitle2}
                    </Typography>
                </CardFooter>
            )}
        </UICard>
    );
};
