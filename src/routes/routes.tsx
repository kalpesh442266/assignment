import { createBrowserRouter } from "react-router-dom";
import ProductCatalogue from "../views/ProductCatalogue/ProductCatalogue";
import { getProducts } from "../services/productService";


export const router = createBrowserRouter([
    {
        path: "/",
        loader: async () => {
            const data = await getProducts();
            return data;
        },
        element: <ProductCatalogue />,
    },
]);