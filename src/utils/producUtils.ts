export const calulateDiscountedPrice = (price: number, discount: number) => {
    const discountedPrice = price - price / 100 * discount;
    return Math.floor(discountedPrice);
}