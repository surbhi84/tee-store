import { useContext, createContext } from "react";
import { contextDataType, useCartReducer } from "../reducer/reducer";

export const CartContext = createContext<contextDataType>(
  {} as contextDataType
);

export const CartContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { cartState, dispatch } = useCartReducer();

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
