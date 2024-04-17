import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import store from '../store';
import { Pagination, ProductData, ProductsState } from './IProducts';


const initialState: ProductsState = {
    productData: [],
    skip: 0,
    limit: 10,
    error: null,
    isLoading: false
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,

    reducers: {
        setProducts: (state, action: PayloadAction<ProductData[]>) => {
            state.productData = action.payload;
        },

        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },

        setSkipLimit: (state, action) => {
            state.skip = action.payload.skip;
            state.limit = action.payload.limit;
        }
    },
})

export const { setProducts, setError, setSkipLimit } = productsSlice.actions

export default productsSlice.reducer
