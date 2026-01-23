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

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
                className,
            )}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-title"
            className={cn('leading-none font-semibold', className)}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-description"
            className={cn('text-muted-foreground text-sm', className)}
            {...props}
        />
    );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
                className,
            )}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-content"
            className={cn('px-6', className)}
            {...props}
        />
    );
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-footer"
            className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
            {...props}
        />
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
};
