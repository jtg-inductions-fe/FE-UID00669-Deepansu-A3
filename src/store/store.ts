import themeReducer from '@/features/theme/theme.slice';
import userReducer from '@/features/user/user.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {users: UsersState ...}
export type AppDispatch = typeof store.dispatch;
