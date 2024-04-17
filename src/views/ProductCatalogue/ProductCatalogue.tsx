import ProductCard from "./ProductCard/ProductCard";
import ProductFilters from "./ProductFilters/ProductFilters";

//styles
import InfiniteScroller from "../../hooks/InfiniteScroll";
import { getProducts } from "../../services/productService";
import { dispatch, useAppSelector } from "../../store/store";
import styles from "./ProductCatalogue.module.scss";

type Props = {}

const ProductCatalogue = (props: Props) => {
  const { productData, isLoading, skip, total } = useAppSelector(state => state.products);

  const getMoreData = async () => {
    dispatch(getProducts({ skip: skip, limit: 10 }))
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