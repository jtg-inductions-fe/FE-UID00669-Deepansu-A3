import { Link } from 'react-router';

import { cn } from '@utils';

import { buttonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';

/**
 * Button Component that supports various variants , sizes and external style overriding
 * @param props - {@link ButtonProps}
 */
export const Button = (props: ButtonProps) => {
    if (!props.asLink) {
        const {
            className,
            variant = 'default',
            size = 'default',
            ...rest
        } = props;

        return (
            <button
                data-slot="button"
                data-variant={variant}
                data-size={size}
                className={cn(buttonVariants({ variant, size, className }))}
                {...rest}
            />
        );
    }

    const { className, variant = 'default', size = 'default', ...rest } = props;

    return (
        <Link
            className={cn(buttonVariants({ variant, size, className }))}
            {...rest}
        />
    );
};
