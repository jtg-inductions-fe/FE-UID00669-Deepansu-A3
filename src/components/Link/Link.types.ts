import { VariantProps } from 'class-variance-authority';
import { LinkProps } from 'react-router';

import { linkVariants } from './Link.styles';

/**
 * Props a Link component takes
 * extended with link props from react router
 */
export type CustomLinkProps = LinkProps & VariantProps<typeof linkVariants>;
