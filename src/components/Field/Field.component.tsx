import { ComponentProps, useMemo } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { Label } from '@components/Label';
import { cn } from '@utils';

import { fieldVariants } from './Field.styles';

export const FieldSet = ({
    className,
    ...props
}: ComponentProps<'fieldset'>) => (
    <fieldset
        data-slot="field-set"
        className={cn(
            'flex flex-col gap-6',
            'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
            className,
        )}
        {...props}
    />
);

export const FieldGroup = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        data-slot="field-group"
        className={cn(
            'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
            className,
        )}
        {...props}
    />
);

export const Field = ({
    className,
    orientation = 'vertical',
    ...props
}: ComponentProps<'div'> & VariantProps<typeof fieldVariants>) => (
    <div
        role="group"
        data-slot="field"
        data-orientation={orientation}
        className={cn(fieldVariants({ orientation }), className)}
        {...props}
    />
);

export const FieldContent = ({
    className,
    ...props
}: ComponentProps<'div'>) => (
    <div
        data-slot="field-content"
        className={cn(
            'group/field-content flex flex-1 flex-col gap-1.5 leading-snug',
            className,
        )}
        {...props}
    />
);

export const FieldLabel = ({
    className,
    ...props
}: ComponentProps<typeof Label>) => (
    <Label
        data-slot="field-label"
        className={cn(
            'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
            'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
            'has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10',
            className,
        )}
        {...props}
    />
);

export const FieldDescription = ({
    className,
    ...props
}: ComponentProps<'p'>) => (
    <p
        data-slot="field-description"
        className={cn(
            'text-muted-foreground leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
            'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
            '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
            className,
        )}
        {...props}
    />
);

export const FieldError = ({
    className,
    children,
    errors,
    ...props
}: ComponentProps<'div'> & {
    errors?: Array<{ message?: string } | undefined>;
}) => {
    const content = useMemo(() => {
        if (children) {
            return children;
        }

        if (!errors?.length) {
            return null;
        }

        const uniqueErrors = [
            ...new Map(errors.map((error) => [error?.message, error])).values(),
        ];

        if (uniqueErrors?.length == 1) {
            return uniqueErrors[0]?.message;
        }

        return (
            <ul className="ml-4 flex list-disc flex-col gap-1">
                {uniqueErrors.map(
                    (error, index) =>
                        error?.message && <li key={index}>{error.message}</li>,
                )}
            </ul>
        );
    }, [children, errors]);

    if (!content) {
        return null;
    }

    return (
        <div
            role="alert"
            data-slot="field-error"
            className={cn('text-destructive leading-4.75', className)}
            {...props}
        >
            {content}
        </div>
    );
};
