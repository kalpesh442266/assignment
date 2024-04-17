import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./products/productsSlice";
import { useDispatch, useSelector } from 'react-redux';

const reducer = {
    products: productsReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const dispatch = store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>()
