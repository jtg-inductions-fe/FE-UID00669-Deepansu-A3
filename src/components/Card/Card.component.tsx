import * as React from 'react';

import { Link } from 'react-router';

import { cn } from '@utils';

import { CardProps } from './Card.types';

/**
 * Card outer container (either link or div based on asLink)
 * @param props - {@link CardProps}
 */
const Card = (props: CardProps) => {
    // If asLink is true => return Link
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

    // Otherwise => return div
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
};

/**
 * Card header component
 */
const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
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
const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div
        data-slot="card-content"
        className={cn('font-bold text-base', className)}
        {...props}
    />
);

/**
 * Card footer component
 */
const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div
        data-slot="card-footer"
        className={cn('flex justify-between mb-2', className)}
        {...props}
    />
);

export { Card, CardHeader, CardContent, CardFooter };
