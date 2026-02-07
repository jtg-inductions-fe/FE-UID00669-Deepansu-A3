import { useLocation } from 'react-router';

import { Button, ButtonGroup } from '@components';
import { ROUTE_PATH } from '@constants';
import { useIsMobile } from '@hooks';

/**
 * Sidebar Container
 */
export const SideBar = () => {
    const location = useLocation();
    const isMobile = useIsMobile();

    return (
        <ButtonGroup
            orientation={isMobile ? 'vertical' : 'horizontal'}
            className={isMobile ? 'gap-1 w-full' : 'gap-0'}
        >
            <Button
                size="lg"
                asLink
                to={ROUTE_PATH.MOVIES}
                data-active={location.pathname.startsWith(ROUTE_PATH.MOVIES)}
                variant={isMobile ? 'secondary' : 'default'}
            >
                Movies
            </Button>
            <Button
                size="lg"
                asLink
                to={ROUTE_PATH.CINEMAS}
                data-active={location.pathname.startsWith(ROUTE_PATH.CINEMAS)}
                variant={isMobile ? 'secondary' : 'default'}
            >
                Cinemas
            </Button>
        </ButtonGroup>
    );
};
