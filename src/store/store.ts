import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./products/productsSlice";
import { useDispatch } from 'react-redux';

const reducer = {
    products: productsReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true
});

export default store;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 