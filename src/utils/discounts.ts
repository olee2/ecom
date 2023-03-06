import IProduct from "../models/IProduct";

/**
 * A function for calculating and adding the discount percentage to each product
 * If the product is not discounted, the value is set to null
 * @param products Array
 * @returns An array of product objects with the discount percentage added
 */

const discounts = (products: []) => {
  const withDiscount = products.map((product: IProduct) => {
    const {
      discountedPrice,
      price,
    }: { discountedPrice: number; price: number } = product;

    let discountedPercent;

    if (discountedPrice !== price) {
      discountedPercent = Math.floor(((price - discountedPrice) / price) * 100);
      console.log(discountedPercent);
    } else {
      discountedPercent = null;
    }
    return { ...product, discountedPercent };
  });
  return withDiscount;
};

export default discounts;
