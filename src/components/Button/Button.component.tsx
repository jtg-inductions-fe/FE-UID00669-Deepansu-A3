import { Link } from 'react-router';

import { cn } from '@utils';

import { buttonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';

/**
 * Button Component that supports various variants , sizes and external style overriding
 * Conditionally renders a link or a button based on a prop(asLink)
 * @param props - {@link ButtonProps}
 */
export const Button = (props: ButtonProps) => {
    // If asLink=true => return a link
    if (props.asLink) {
        const {
            asLink,
            variant = 'default',
            size = 'default',
            className,
            ...rest
        } = props;

        return (
            <Link
                className={cn(buttonVariants({ variant, size, className }))}
                data-link={asLink}
                {...rest}
            />
        );
    }
    // If asLink=false => return a button
    else {
        const {
            asLink,
            variant = 'default',
            size = 'default',
            type = 'button',
            className,
            ...rest
        } = props;

        return (
            <button
                data-slot="button"
                data-variant={variant}
                data-size={size}
                className={cn(buttonVariants({ variant, size, className }))}
                type={type}
                data-link={asLink}
                {...rest}
            />
        );
    }
};
