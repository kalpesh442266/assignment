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

    filters: {
        category: "",
        sortByPrice: "ASC",
        sortByPopularity: "ASC",
        searchBy: ""
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setData(state, action) {
            state.productData = action.payload.data.products;
            state.total = action.payload.data.total;
        },
        setInbuiltFilters(state, action) {
            // for api fiters
            state.productData = [];
            state.filters = { ...state.filters, [action.payload.key]: action.payload.value }
            state.total = 0;
        },
        setExternalFilters(state, action) {
            // for filters on existing products
            switch (action.payload) {
                case "sortByPopularity_ASC": {
                    // state.productData = state.productData.sort((product.)=>{})
                },
                case "sortByPopularity_DSC": {

                },
                case "sortByPrice_ASC": {

                },
                case "sortByPrice_DSC": {

                }
            }
        }

    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productData = [...state.productData, ...action.payload.products];
            state.skip = action.payload.skip > action.payload.total ? action.payload.total : action.payload.skip;
            state.total = action.payload.total;
        })
    }
})

export const { setData, setInbuiltFilters } = productsSlice.actions

export default productsSlice.reducer
