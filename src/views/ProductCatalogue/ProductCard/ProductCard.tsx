import { ProductCardProps } from "./IProductCard";

//styles
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.productImage} src={product.images[0]} />
      </div>
      <div className={styles.labelsContainer}>
        <h3 className={styles.title}>
          {product.title}
        </h3>
        <div className={styles.price}>
          Rs. {product.price}
        </div>
      </div>
      <div className={product.stock < 40 ? styles.fewRemaining : styles.inStock}>{product.stock < 40 ? "Only few remaining" : "In Stock"}</div>
    </div>
  )
}

export default ProductCard
