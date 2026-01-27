import { ComponentProps } from 'react';

import { Link } from 'react-router';

import { cn } from '@utils';

import { CardProps } from './Card.types';

/**
 * Card outer container (either link or div based on asLink)
 * @param props - {@link CardProps}
 */
const Card = (props: CardProps) => {
    // If asLink=true => return a link
    if (props.asLink) {
        const { asLink, className, ...rest } = props;

        return (
            <Link
                data-slot="card"
                className={cn(
                    'bg-card text-card-foreground flex flex-col gap-4 rounded-2xl p-3 shadow-sm',
                    className,
                )}
                data-link={asLink}
                {...rest}
            />
        );
    }
    // If asLink=false => return a button
    else {
        const { asLink, className, ...rest } = props;

        return (
            <div
                data-slot="card"
                className={cn(
                    'bg-card text-card-foreground flex flex-col gap-4 rounded-2xl p-3 shadow-sm',
                    className,
                )}
                data-link={asLink}
                {...rest}
            />
        );
    }
};

/**
 * Card header component
 */
const CardHeader = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        data-slot="card-header"
        className={cn(
            'w-full max-h-2/3 rounded-xl overflow-hidden mb-2',
            className,
        )}
        {...props}
    />
);

/**
 * Card content component
 */
const CardContent = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        data-slot="card-content"
        className={cn('font-bold text-base', className)}
        {...props}
    />
);

/**
 * Card footer component
 */
const CardFooter = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        data-slot="card-footer"
        className={cn('flex justify-between mb-2', className)}
        {...props}
    />
);

export { Card, CardHeader, CardContent, CardFooter };
