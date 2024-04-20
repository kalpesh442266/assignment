//styles
import style from "./ProductFilter.module.scss";

import Filter from "../../../Icons/Filter";
import Sort from "../../../Icons/Sort";

type Props = {}

const ProductFilters = (props: Props) => {
  return (
    <div className={style.container}>
      <h2>Products</h2>
      <div className={style.buttonsContainer}>
        <div className={style.iconTextWrapper}><Filter height={24} width={24} /><span className={style.iconText}>Filter</span></div>
        <div className={style.iconTextWrapper}><Sort height={24} width={24} /><span className={style.iconText}>Sort</span></div>
      </div>
    </div>
  )
}

export default ProductFilters