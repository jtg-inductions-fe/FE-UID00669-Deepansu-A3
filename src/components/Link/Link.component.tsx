import { Link as LinkReactRouter } from 'react-router';

import { cn } from '@utils';

import { CustomLinkProps } from './Link.types';

/**
 * Custom Link Component
 */
export const Link = ({ className, ...rest }: CustomLinkProps) => (
    <LinkReactRouter
        className={cn('underline underline-offset-4 text-primary', className)}
        {...rest}
    />
);
