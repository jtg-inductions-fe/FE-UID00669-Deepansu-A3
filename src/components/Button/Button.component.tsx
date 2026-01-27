import { Slot } from '@radix-ui/react-slot';
import { cn } from '@utils';

import { buttonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';

/**
 * Button Component that supports various variants , sizes and external style overriding
 * @param props - {@link ButtonProps}
 */
export const Button = (props: ButtonProps) => {
    const {
        className,
        asChild = false,
        variant = 'default',
        size = 'default',
        ...rest
    } = props;
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...rest}
        />
    );
};
