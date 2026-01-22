import { Outlet } from 'react-router';

import { Navbar } from '@containers';

export const RootLayout = () => (
    <div className="h-screen overflow-hidden">
        <Navbar />
        <Outlet />
    </div>
);
