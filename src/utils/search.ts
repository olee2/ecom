import IProduct from "../models/IProduct";

const searchAlgo = (product: IProduct, term: string) =>
  product.title.toLowerCase().search(term.trim()) > -1 ||
  product.description.toLowerCase().search(term.trim()) > -1;

export default searchAlgo;
