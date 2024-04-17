import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import { ProductData } from "../../store/products/IProducts";

//styles
import styles from "./ProductCatalogue.module.scss";
import ProductFilters from "./ProductFilters/ProductFilters";

type Props = {}

const ProductCatalogue = (props: Props) => {
  const productsData = useLoaderData() as ProductData[];

  
  return (
    <>
      <ProductFilters />
      <div className={styles.grid}>
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
        }
      </div>
    </>
  )
}

export default ProductCatalogue