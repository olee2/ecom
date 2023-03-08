interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: Array<String>;
  reviews: object;
  discountedPercent?: number | null;
}

export default IProduct;
