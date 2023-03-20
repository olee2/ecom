import IProduct from "./IProduct";

interface ICart {
  cartItems: IProduct[];
  total: number;
  amount: number;
}

export default ICart;
