import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../services/productService';
import { ProductsState } from './IProducts';


const initialState: ProductsState = {
    productData: [],
    skip: 0,
    limit: 10,
    error: null,
    isLoading: false,
    total: 2,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setData(state, action) {
            state.productData = action.payload.data.products;
            state.total = action.payload.data.total;
        }
    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productData = [...state.productData, ...action.payload.products];
            state.skip = action.payload.skip > action.payload.total ? action.payload.total : action.payload.skip;
            state.total = action.payload.total;
        })
    }
})

export const { setData } = productsSlice.actions

export default productsSlice.reducer
