import { useEffect } from "react"
import { getProducts } from "../../store/products/productsSlice"
import { useAppDispatch } from "../../store/store"

type Props = {}

const ProductCatalogue = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts({ skip: 1, limit: 20 }))
  }, [])
  return (
    <div>ProductCatalogue123</div>
  )
}

export default ProductCatalogue