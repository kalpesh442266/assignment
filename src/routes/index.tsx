import { createBrowserRouter } from "react-router-dom";
import ProductCatalogue from "../views/ProductCatalogue/ProductCatalogue";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductCatalogue />,
    },
]);