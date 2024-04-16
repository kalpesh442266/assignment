import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { pagination, ProductData, ProductsState } from './IProducts';
import { AppState } from '../interfaces';


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


export const getProducts = createAsyncThunk('products/getProducts', async (params: pagination, { dispatch }) => {
    try {
        const data = await axios.get("https://dummyjson.com/products");
        dispatch(setProducts(data.data.products));
        dispatch(setSkipLimit({ skip: params.skip, limit: params.limit }))
        console.log(data)
    } catch (e: any) {
        dispatch(setError(e))
    }
})


export default productsSlice.reducer
