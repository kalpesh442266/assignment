import { useNavigate } from "react-router-dom";
import Rating from "../../../Icons/Rating";
import { calulateDiscountedPrice } from "../../../utils/producUtils";
import { ProductCardProps } from "./IProductCard";

//styles
import styles from "./ProductCard.module.scss";
import Card from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typography";
import Stack from "../../../components/Layouts/Stack/Stack";

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const discountedPrice = calulateDiscountedPrice(product.price, product.discountPercentage)
  return (
    <Card backgroundColor="light" onClick={() => { navigate(`/product/${product.id}`) }} borderRadius>
      <div className={styles.imageContainer}>
        <img className={styles.productImage} src={product.images[0]} />
        <span className={styles.ratingWrapper}>
          <Rating height={18} width={18} fill={product.rating < 3 ? "#dc3545" : "#28a745"} />
          <span className={styles.rating}>{product.rating}</span>
        </span>
      </div>
      <div className={styles.labelsContainer}>
        <Typography ellipsis mt={10} As="h3" fontSize="x-large" >
          {product.title}
        </Typography>

        <Stack direction="row" align="center" mt={10}>
          <Typography As="span" fontSize="medium" fontWeight="normal">Rs. {discountedPrice}</Typography>
          <Typography color="grey-10" ml={10} As="span" lineThrough fontSize="small" >Rs. {product.price}</Typography>
          {/* <span className={styles.discountPercentage}>{product.discountPercentage}% OFF</span> */}
          <Typography  ml={10} fontSize="small" As="span">{product.discountPercentage}% OFF</Typography>
        </Stack>
      </div>
      <div className={product.stock < 40 ? styles.fewRemaining : styles.inStock}>
        {product.stock < 40 ? "Only few remaining" : "In Stock"}
      </div>
    </Card>
  )
}

export default ProductCard
