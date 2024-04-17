import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pagination } from "../store/products/IProducts";

export const getProducts =
    createAsyncThunk("products/getProducts",
        async (params: Pagination = { skip: 0, limit: 20 }) => {
            try {
                const data = await axios.get(`https://dummyjson.com/products?limit=${params.limit}&skip=${params.skip}`);
                return data.data;
            } catch (e: any) {
                throw {
                    message: "Error occured while fetching data",
                    status: e.status
                }
            }
        })