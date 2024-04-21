//styles
import style from "./ProductFilter.module.scss";

import { useEffect, useState } from "react";
import Select from 'react-select';
import Box from "../../../components/Box/Box";
import Card from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typography";
import { getCategories, getProducts } from "../../../services/productService";
import { setInbuiltFilters } from "../../../store/products/productsSlice";
import { useAppDispatch } from "../../../store/store";


type Props = {}

const ProductFilters = (props: Props) => {
  const [categories, setCategories] = useState<{ value: string, label: string }[]>([{ value: "all", label: "All" }]);
  const dispatch = useAppDispatch();

  const sortOptions = [
    { value: 'sortByPopularity_ASC', label: 'Popularity-Low to High' },
    { value: 'sortByPopularity_DSC', label: 'Popularity-High to Low' },
    { value: 'sortByPrice_ASC', label: 'Price-Low to High' },
    { value: 'sortByPrice_DSC', label: 'Price-High to Low' },
  ]

  useEffect(() => {
    getCategories().then((data: string[]) => {
      const processedData = data.map((category: string) => {
        return { value: category.toLowerCase(), label: category }
      })
      setCategories(prevData => ([...prevData, ...processedData]));
    });

  }, [])

  const handleCategoryFilter = (value: string) => {
    dispatch(setInbuiltFilters({ key: "category", value: value }));
    dispatch(getProducts({ skip: 0, limit: 20 }))
  }

  const handleSortFilter = (value: string) => {

  }

  return (
    <Card borderRadius backgroundColor="light" p={15}>
      <div className={style.container}>
        <h2>Product Filters</h2>

        <Box mt={15}>
          <Typography As={"p"} fontSize="small">Sort By</Typography>
          <Select onChange={(e) => { if (e) handleSortFilter(e.value) }} defaultValue={sortOptions[0]} placeholder="Sort By..." options={sortOptions} />
        </Box>

        <Box mt={15}>
          <Typography As={"p"} fontSize="small" >Filter By Categories</Typography>
          <Select onChange={async (e) => { if (e) handleCategoryFilter(e.value) }} defaultValue={categories[0]} placeholder="Select catagory..." options={categories} />
        </Box>
      </div>
    </Card>
  )
}

export default ProductFilters