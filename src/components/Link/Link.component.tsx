import { Link as LinkReactRouter } from 'react-router';

import { cn } from '@utils';

import { linkVariants } from './Link.styles';
import { CustomLinkProps } from './Link.types';

/**
 * Custom Link Component
 */
export const Link = ({
    className,
    variant = 'primary',
    ...rest
}: CustomLinkProps) => (
    <LinkReactRouter
        className={cn(linkVariants({ variant, className }))}
        {...rest}
    />
);
