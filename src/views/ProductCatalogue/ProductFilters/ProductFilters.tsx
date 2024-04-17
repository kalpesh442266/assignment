//styles
import style from "./ProductFilter.module.scss";

import Sort from "../../../Icons/Sort"
import Filter from "../../../Icons/Filter";

type Props = {}

const ProductFilters = (props: Props) => {
  return (
    <div className={style.container}>
      <h1>Products</h1>
      <div className={style.buttonsContainer}>
        <div><Filter height={24} width={24} /><span className={style.iconText}>Filter</span></div>
        <div><Sort height={24} width={24} /><span className={style.iconText}>Sort</span></div>
      </div>
    </div>
  )
}

export default ProductFilters