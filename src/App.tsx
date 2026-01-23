import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router/dom';

import { ThemeProvider } from '@features/theme';
import { routes } from '@router';
import { store } from '@store';

/**
 *  Component that holds all routes with components
 */
export const App = () => (
    <Provider store={store}>
        <ThemeProvider>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </Provider>
);
