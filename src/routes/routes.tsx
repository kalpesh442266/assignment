import { RouterProvider as Router, createBrowserRouter } from "react-router-dom";
import { getProduct, getProductsData } from "../services/productService";
import { setData } from "../store/products/productsSlice";
import { dispatch } from "../store/store";
import ErrorPage from "../views/ErrorPage/ErrorPage";
import Loader from "../views/Loader/Loader";
import ProductCatalogue from "../views/ProductCatalogue/ProductCatalogue";
import ProductDetails from "../views/ProductDetails/ProductDetails";
import MainPageHoc from "../Hoc/MainPageHoc/MainPageHoc";

const RouterProvider = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPageHoc />,
            children: [
                {
                    path: "",
                    loader: async () => {
                        const data = await getProductsData({ skip: 0, limit: 10 })
                        dispatch(setData({ data }))
                        return data;
                    },
                    element: <ProductCatalogue />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "/product/:id",
                    loader: async ({ params }) => {
                        return await getProduct(params.id ? params.id : "")
                    },
                    element: <ProductDetails />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "*",
                    element: <ErrorPage />
                }

            ]
        },

    ]);

    return <Router router={router} fallbackElement={<Loader coverPage />} />

}

export default RouterProvider;