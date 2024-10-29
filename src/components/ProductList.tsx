import { IProduct } from "../interfaces";
import Counter from "./Counter";
import { useGetProductListQuery } from "../store/features/productSlice";

const ProductList = () => {
  const {data ,isLoading } =  useGetProductListQuery({});
  
   if(isLoading) return <h3>Loading...</h3>
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mg:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <Counter key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
