import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

import { useIsMobile } from '@/hooks';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@components';
import { ROUTE_PATH } from '@constants';
import { SideBar } from '@containers/SideBar';
import { UserProfile } from '@containers/UserProfile';
import Logo from '@images/main_logo.webp';

import { CitySearchBar } from '../CitySearchBar';

/**
 * Navbar Container
 */
export const Navbar = () => {
    const isMobile = useIsMobile();

    return (
        <header className="flex justify-between items-center h-20 w-full max-w-480 mx-auto px-4">
            {!isMobile && (
                <Link to={ROUTE_PATH.HOME} className="h-full">
                    <img
                        src={Logo}
                        alt="Go to home page"
                        className="h-full w-auto"
                    />
                </Link>
            )}
            <div className="flex justify-between w-full md:w-fit gap-4">
                {isMobile ? (
                    <Sheet>
                        <SheetTrigger aria-label="Open Sidebar menu">
                            <Menu size="40" />
                        </SheetTrigger>
                        <SheetContent className="p-4" showCloseButton={false}>
                            <SheetTitle hidden>SideBar</SheetTitle>
                            <SheetHeader className="flex flex-row justify-between h-20">
                                <Link to={ROUTE_PATH.HOME}>
                                    <img
                                        src={Logo}
                                        alt="Website main logo"
                                        className="h-full w-auto"
                                    />
                                </Link>
                                <SheetClose aria-label="Close Sidebar menu">
                                    <X size="40" />
                                </SheetClose>
                            </SheetHeader>
                            <SideBar />
                        </SheetContent>
                    </Sheet>
                ) : (
                    <SideBar />
                )}
                <div className="flex gap-4">
                    <CitySearchBar />
                    <UserProfile />
                </div>
            </div>
        </header>
    );
};
