import ProductCard from "./ProductCard/ProductCard";
import ProductFilters from "./ProductFilters/ProductFilters";

//styles
import { useOutletContext } from "react-router-dom";
import InfiniteScroller from "../../hooks/InfiniteScroll";
import { getProducts } from "../../services/productService";
import { dispatch, useAppSelector } from "../../store/store";
import styles from "./ProductCatalogue.module.scss";


const ProductCatalogue = () => {
  const data = useOutletContext();
  console.log(data);

  const { productData, isLoading, skip, total } = useAppSelector(state => state.products);

  const getMoreData = async () => {
    dispatch(getProducts({ skip: skip + 10, limit: 10 }))
  }

  return (
    <>
      <ProductFilters />
      <InfiniteScroller callback={getMoreData} isLoading={isLoading} hideSentinal={total - 1 >= productData.length} >
        <div className={styles.grid}>
          {productData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroller>
    </>
  )
}

export default ProductCatalogue