import { rawProduct } from "./data";
import {
  AddToCart,
  DecreaseCartItem,
  IncreaseCartItem,
  RemoveFromCart,
} from "./reducer/types";

export const addToCartHandler = (
  product: rawProduct,
  dispatch: React.Dispatch<{
    type: string;
    payload: rawProduct;
  }>
) => {
  dispatch({ type: AddToCart, payload: product });
};

export const removeFromCartHandler = (
  product: rawProduct,
  dispatch: React.Dispatch<{
    type: string;
    payload: rawProduct;
  }>
) => {
  dispatch({ type: RemoveFromCart, payload: product });
};

export const increaseCartItemHandler = (
  product: rawProduct,
  dispatch: React.Dispatch<{
    type: string;
    payload: rawProduct;
  }>
) => {
  dispatch({ type: IncreaseCartItem, payload: product });
};

export const decreaseCartItemHandler = (
  product: rawProduct,
  dispatch: React.Dispatch<{
    type: string;
    payload: rawProduct;
  }>
) => {
  dispatch({ type: DecreaseCartItem, payload: product });
};
