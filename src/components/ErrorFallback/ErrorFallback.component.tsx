import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import { ErrorProps } from './ErrorFallback.types';

/**
 * Reusable error component for different error codes
 */
export const ErrorFallback = ({ errorConfig }: ErrorProps) => {
    /**
     * Get respective error config
     */
    const {
        backgroundImageConfig,
        buttonText,
        heading,
        mainImageConfig,
        redirectLink,
        subheading,
    } = errorConfig;

    return (
        <section
            className="h-screen w-screen flex flex-col justify-center items-center gap-5 text-white"
            style={{ backgroundImage: `url(${backgroundImageConfig.src})` }}
        >
            <img
                {...mainImageConfig}
                alt={mainImageConfig.alt || 'Card Main Image'}
            />
            <div className="text-center">
                <Typography variant="h1" tag="h1">
                    {heading}
                </Typography>
                <Typography variant="h4" color="muted">
                    {subheading}
                </Typography>
            </div>
            <Button asLink to={redirectLink} size="lg">
                {buttonText}
            </Button>
        </section>
    );
};
