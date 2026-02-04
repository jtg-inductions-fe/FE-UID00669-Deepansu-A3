import { useEffect, useState } from 'react';

import { GENERIC_MOBILE_WIDTH } from '@constants';

/**
 * useIsMobile Hook (Custom hook)
 * Checks whether the current device width is of a mobile device
 * and return a boolean value
 */
export const useIsMobile = (MOBILE_BREAKPOINT = GENERIC_MOBILE_WIDTH) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(
            `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
        );

        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };

        mql.addEventListener('change', onChange);

        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        return () => {
            mql.removeEventListener('change', onChange);
        };
    }, [MOBILE_BREAKPOINT]);

    return !!isMobile;
};
