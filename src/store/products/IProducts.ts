export type ProductData = {
    title: string,
    category: string
}

export type pagination = {
    skip: number,
    limit: number
}

export type ProductsState = {
    productData: ProductData[],
    isLoading: Boolean,
    error: string | null
} & pagination;