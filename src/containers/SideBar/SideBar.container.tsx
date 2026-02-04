import { useLocation } from 'react-router';

import { Button, ButtonGroup } from '@components';
import { ROUTE_PATH } from '@constants';
import { useIsMobile } from '@hooks';
import { cn } from '@utils';

/**
 * Sidebar Container
 */
export const SideBar = () => {
    const location = useLocation();
    const isMobile = useIsMobile();

    return (
        <div
            className={cn(
                'flex gap-4 items-center',
                isMobile ? 'flex-col *:w-full' : 'flex-row',
            )}
        >
            <ButtonGroup
                orientation={isMobile ? 'vertical' : 'horizontal'}
                className={isMobile ? 'gap-1 w-full' : 'gap-0'}
            >
                <Button
                    size="lg"
                    asLink
                    to={ROUTE_PATH.MOVIES}
                    data-active={location.pathname === ROUTE_PATH.MOVIES}
                    variant={isMobile ? 'secondary' : 'default'}
                >
                    Movies
                </Button>
                <Button
                    size="lg"
                    asLink
                    to={ROUTE_PATH.CINEMAS}
                    data-active={location.pathname === ROUTE_PATH.CINEMAS}
                    variant={isMobile ? 'secondary' : 'default'}
                >
                    Cinemas
                </Button>
            </ButtonGroup>
        </div>
    );
};
