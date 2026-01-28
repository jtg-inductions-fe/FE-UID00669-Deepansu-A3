import { cn } from '@utils';

import { TYPOGRAPHY_VARIANTS } from './Typography.constants';
import { VariantClassMap } from './Typography.styles';
import { TypographyProps } from './Typography.types';

/**
 * Typography component that support passing tag and style variant as props
 * along with external style overriding
 * @param props - {@link TypographyProps}
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
