import {
    Card as UICard,
    CardContent,
    CardFooter,
    CardHeader,
    TypographyMuted,
} from '@ui_components';

import { CardProps } from './Card.types';

/**
 * Custom Card Component
 */
export const Card = (props: CardProps) => {
    const { title, footer, redirectTo, ...imageProps } = props;

    return (
        <UICard asLink={true} to={redirectTo} className="w-64">
            <CardHeader>
                {/* Disabled linting here because we are sending alt and all other image props from the container only */}
                {/* eslint-disable-next-line */}
                <img {...imageProps} />
            </CardHeader>
            <CardContent>
                <span>{title}</span>
            </CardContent>
            {footer && (
                <CardFooter>
                    <TypographyMuted className="text-sm">
                        {footer.subtitle1}
                    </TypographyMuted>
                    <TypographyMuted className="text-sm">
                        {footer.subtitle2}
                    </TypographyMuted>
                </CardFooter>
            )}
        </UICard>
    );
};
