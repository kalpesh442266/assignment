import { createBrowserRouter } from "react-router-dom";
import ProductCatalogue from "../views/ProductCatalogue/ProductCatalogue";
import { getProducts } from "../services/productService";
import { dispatch } from "../store/store";


export const router = createBrowserRouter([
    {
        path: "/",
        // loader: async () => {
        //     const data = await dispatch(getProducts({ skip: 0, limit: 10 }));
        //     return data.payload;
        // },
        element: <ProductCatalogue />,
    },
]);