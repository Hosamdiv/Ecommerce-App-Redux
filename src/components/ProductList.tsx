import { IProduct } from "../interfaces";
import Counter from "./Counter";
import { useEffect } from "react";
import { getProductList } from "../store/features/productSlice";
import { useAppDispatch } from "../store/Store";

const ProductList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mg:gap-4 p-2 rounded-md">
      {[].map((item: IProduct) => (
        <Counter key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
