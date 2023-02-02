import { configureStore } from '@reduxjs/toolkit';
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from 'react-redux';
import { todoSlice } from './slice';

export const createStore = () =>
    configureStore({
        reducer: {
            todoapp: todoSlice.reducer,
        },
    });

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store['getState']>;
export type DispatchAction = Store['dispatch'];

export const useDispatch = () => useReduxDispatch<DispatchAction>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
