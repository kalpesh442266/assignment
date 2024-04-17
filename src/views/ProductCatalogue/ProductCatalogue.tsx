import { useLoaderData } from "react-router-dom";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { ProductData } from "../../store/products/IProducts";
import ProductCard from "./ProductCard/ProductCard";
import ProductFilters from "./ProductFilters/ProductFilters";

//styles
import { getProducts } from "../../services/productService";
import { useAppSelector } from "../../store/store";
import styles from "./ProductCatalogue.module.scss";
import { useState } from "react";

type Props = {}

const ProductCatalogue = (props: Props) => {
  const initData = useLoaderData() as ProductData[];
  const products = useAppSelector(state => state.products);
  const [productsData, setProductsData] = useState(initData);

  const getMoreData = async () => {
    const data = await getProducts({ skip: products.skip + products.limit, limit: 10 });
    setProductsData(prev => ([...prev, ...data]))
  }

  const { loadMoreRef } = useInfiniteScroll({ callback: getMoreData });
  return (
    <>
      <ProductFilters />
      <div className={styles.grid}>
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
        }
      </div>
      <div ref={loadMoreRef} style={{ height: "50px", textAlign: "center" }}>loading..</div>
    </>
  )
}

export default ProductCatalogue