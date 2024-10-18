import { productData } from "../data";
import { IProduct } from "../interfaces";
import Counter from "./Counter";

const ProductList = () => {
  const data = productData;
  return (
    <div className="flex items-center justify-center space-x-10">
      {data.map((item: IProduct) => (
        <Counter key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
