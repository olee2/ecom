interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: Array<String>;
  reviews: Array<{
    id: string;
    username: string;
    rating: number;
    description: string;
  }>;
  discountedPercent?: number | null;
  amount?: number;
}

export default IProduct;
