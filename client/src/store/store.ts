import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './State/theme.state';
import { emptySplitApi } from './createApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer: {
        mode: themeReducer,
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emptySplitApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
