import { IProduct } from "../interfaces";

export const addItemToShoppingCart = (
  cartItem: IProduct[],
  product: IProduct
) => {
  const exists = cartItem.find((item) => item.id === product.id);

  if (exists) {
    return cartItem.map((item) =>
      item.id === product.id ? { ...item, qty: (item.qty || 0) + 1 } : item
    );
  }
  return [...cartItem, { ...product, qty: 1 }];
};
