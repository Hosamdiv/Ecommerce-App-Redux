import Button from "./ui/Button";
import { useAppDispatch } from "../store/Store";
import { IProduct } from "../interfaces";
import { addItemToCartAction } from "../store/features/counter/cartSlice";
interface IProductData {
  product: IProduct;
}

const Counter: React.FC<IProductData> = ({ product }) => {
  const dispatch = useAppDispatch();
  const {  title, price,thumbnail } = product;
  return (
    <div className=" ">
      <div className="flex items-center justify-center 
      rounded-2xl my-2 text-center space-x-3 text-black bg-white">
        <div className="text-lg font-bold p-3">
          <div>Price: {price}</div>
          <img className="" src={thumbnail} />
          <div>{title}</div>
        </div>
      </div>
      <Button fullWidth onClick={() => dispatch(addItemToCartAction(product))}>
        Add Data
      </Button>
    </div>
  );
};

export default Counter;
