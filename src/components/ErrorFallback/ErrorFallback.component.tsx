import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import { ERROR_CONFIG } from './ErrorFallback.config';
import { ErrorProps } from './ErrorFallback.types';

/**
 * Reusable error component for different error codes
 */
export const ErrorFallback = ({ errorCode }: ErrorProps) => {
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
    } = ERROR_CONFIG[errorCode];

    return (
        <section
            className="h-screen w-screen flex flex-col justify-center items-center gap-5 text-white font-inter"
            style={{ backgroundImage: `url(${backgroundImageConfig.src})` }}
        >
            <div>
                <img
                    {...mainImageConfig}
                    alt={mainImageConfig.alt || 'Card Main Image'}
                />
            </div>
            <div className="text-center">
                <span className="text-5xl">{heading}</span>
                <Typography className="text-xl" variant="muted">
                    {subheading}
                </Typography>
            </div>
            <Button
                asLink
                to={redirectLink}
                size="lg"
                className="rounded-full text-inherit"
            >
                {buttonText}
            </Button>
        </section>
    );
};
