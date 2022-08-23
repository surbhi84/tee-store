import { cartItem } from "../reducer/reducer";
import { useCartContext } from "./CartContextProvider";
import { CartDetails } from "./CartDetails";
import { CartProductCard } from "./CartProductCard";

export const Cart = () => {
  const { cartState, dispatch } = useCartContext();
  console.log(cartState, "cartststs");
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center m-4 relative">
      {cartState.map((cartItem: cartItem) => (
        <CartProductCard cartItem={cartItem} key={cartItem.product.id} />
      ))}
      <CartDetails />
    </div>
  );
};
