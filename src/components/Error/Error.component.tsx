import { Typography } from '@components';
import { LinkButton } from '@ui_components';

import { ERROR_CONFIG } from './Error.config';
import { ErrorProps } from './Error.types';

/**
 * Reusable error component for different error codes
 */
export const Error = ({ errorCode }: ErrorProps) => {
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
                <img src={mainImageConfig.src} alt={mainImageConfig.src} />
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
