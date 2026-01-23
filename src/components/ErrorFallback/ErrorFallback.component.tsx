import { LinkButton } from '@components/Button';
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
        <div
            className="h-screen w-screen flex flex-col justify-center items-center gap-5 text-white font-inter"
            style={{ backgroundImage: `url(${backgroundImageConfig.src})` }}
        >
            <div>
                {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is passed via mainImageConfig spread */}
                <img {...mainImageConfig} />
            </div>
            <div className="text-center">
                <span className="text-5xl">{heading}</span>
                <Typography className="text-xl" variant="muted">
                    {subheading}
                </Typography>
            </div>
            <LinkButton
                size="lg"
                to={redirectLink}
                className="rounded-full text-inherit"
            >
                {buttonText}
            </LinkButton>
        </div>
    );
};
