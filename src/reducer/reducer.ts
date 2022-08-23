import { useReducer } from "react";
import { rawProduct } from "../data";
import {
  AddToCart,
  DecreaseCartItem,
  IncreaseCartItem,
  RemoveFromCart,
} from "./types";

export interface cartItem {
  product: rawProduct;
  quantity: number;
}

export interface contextDataType {
  cartState: cartItem[];
  dispatch: React.Dispatch<{
    type: string;
    payload: rawProduct;
  }>;
}

export const useCartReducer = (): contextDataType => {
  const initialState: Array<cartItem> = [];

  function cartReducer(
    cartState: Array<cartItem>,
    action: { type: string; payload: rawProduct }
  ): Array<cartItem> {
    switch (action.type) {
      case AddToCart: {
        let index = cartState.findIndex(
          (productItem) => productItem.product.id === action.payload.id
        );
        if (index !== -1) {
          let newState = [...cartState];
          newState[index] = {
            product: cartState[index].product,
            quantity: cartState[index].quantity + 1,
          };
          return newState;
        } else return [...cartState, { product: action.payload, quantity: 1 }];
      }

      case RemoveFromCart: {
        let newState = cartState.filter(
          (productItem) => productItem.product.id !== action.payload.id
        );
        return newState;
      }

      case IncreaseCartItem: {
        let index = cartState.findIndex(
          (productItem) => productItem.product.id === action.payload.id
        );
        let newState = [...cartState];
        newState[index] = {
          product: cartState[index].product,
          quantity: cartState[index].quantity + 1,
        };
        return newState;
      }

      case DecreaseCartItem: {
        let index = cartState.findIndex(
          (productItem) => productItem.product.id === action.payload.id
        );
        let newState = [...cartState];
        newState[index] = {
          product: cartState[index].product,
          quantity: cartState[index].quantity - 1,
        };
        return newState;
      }

      default:
        return cartState;
    }
  }

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return { cartState, dispatch };
};
