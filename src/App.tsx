import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router/dom';

import { routes } from '@router';
import { store } from '@store';

/**
 *  Component that holds all routes with components
 */
export const App = () => (
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
);
