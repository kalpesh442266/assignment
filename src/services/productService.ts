import axios from "axios";
import { setError, setProducts, setSkipLimit } from "../store/products/productsSlice";
import { dispatch } from "../store/store";
import { Pagination } from "../store/products/IProducts";

export const getProducts = async (params: Pagination = { skip: 0, limit: 10 }) => {
    try {
        const data = await axios.get(`https://dummyjson.com/products?limit=${params.limit}&skip=${params.skip}`);
        dispatch(setProducts(data.data.products));
        dispatch(setSkipLimit({ skip: params.skip, limit: params.limit }))
        console.log(data);
        return data.data.products;
    } catch (e: any) {
        dispatch(setError(e));
        throw {
            message: "Error occured while fetching data",
            status: e.status
        }
    }
}