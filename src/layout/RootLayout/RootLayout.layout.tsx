import { Outlet } from 'react-router';

import { Navbar } from '@containers';

/**
 * Root Layout
 * Contains the root layout (navbar and the children)
 */
export const RootLayout = () => (
    <div className="h-screen overflow-hidden flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-hidden hover:overflow-y-auto w-full max-w-480 mx-auto">
            <Outlet />
        </main>
    </div>
);
