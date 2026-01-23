import { Outlet } from 'react-router';

import { Navbar } from '@containers';

/**
 * Root Layout
 * Contains the root layout (navbar and the children)
 */
export const RootLayout = () => (
    <div className="h-screen overflow-hidden">
        <Navbar />
        <Outlet />
    </div>
);
