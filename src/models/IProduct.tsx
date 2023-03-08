interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: object;
  reviews: object;
  discountedPercent?: number | null;
}

export default IProduct;
