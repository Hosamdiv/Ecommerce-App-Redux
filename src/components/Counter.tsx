import Button from "./ui/Button";
import { useAppDispatch } from "../store/Store";
import { IProduct } from "../interfaces";
import { addItemToCartAction } from "../store/features/counter/cartSlice";

interface IProductData {
  product: IProduct;
}

const Counter: React.FC<IProductData> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { id, title, address, price } = product;
  return (
    <div className="flex items-center justify-center my-10 space-x-3">
      <div>
        <div>ID: {id}</div>
        <div>Title: {title}</div>
        <div>Address: {address}</div>
        <div>Price: {price}</div>
      </div>
      <Button onClick={() => dispatch(addItemToCartAction(product))}>
        Add Data
      </Button>
    </div>
  );
};

export default Counter;
