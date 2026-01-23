import { LinkProps } from 'react-router';

/**
 * Props a Link component takes
 * extended with link props from react router
 */
export type CustomLinkProps = {
    /**
     * External overriding css classes
     */
    className?: string;
} & LinkProps;
