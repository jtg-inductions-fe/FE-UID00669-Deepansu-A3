import { cn } from '@utils/styling.utils';

import { TYPOGRAPHY_VARIANTS } from './Typography.constants';
import { VariantClassMap } from './Typography.styles';
import { TypographyProps } from './Typography.types';

/**
 * Typography component
 */
export const Typography = (props: TypographyProps) => {
    const {
        tag,
        variant = TYPOGRAPHY_VARIANTS.span,
        children,
        className,
    } = props;

    const Comp = tag || TYPOGRAPHY_VARIANTS.p;

    return (
        <Comp className={cn(VariantClassMap[variant], className)}>
            {children}
        </Comp>
    );
};
