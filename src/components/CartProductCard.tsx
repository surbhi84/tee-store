import {
  decreaseCartItemHandler,
  increaseCartItemHandler,
} from "../cartHandlers";
import { cartItem } from "../reducer/reducer";
import { useCartContext } from "./CartContextProvider";

export const CartProductCard = ({ cartItem }: { cartItem: cartItem }) => {
  const { dispatch } = useCartContext();
  return (
    <>
      {cartItem.quantity > 0 && (
        <div className="h- w-64 shadow-lg flex flex-col p-2 object-cover">
          <img src={cartItem.product.img} className="w-[100%] h-64 " />
          <span>{cartItem.product.name}</span>

          <div className="flex gap-2 ml-auto mt-auto">
            <span>₹{cartItem.product.price}</span>
            <button
              className="bg-red-200 px-2 rounded-sm border border-red-800 hover:scale-105 hover:transition-transform"
              onClick={() =>
                decreaseCartItemHandler(cartItem.product, dispatch)
              }
            >
              -
            </button>
            {cartItem.quantity}
            <button
              className="bg-red-200 px-2 rounded-sm border border-red-800 hover:scale-105 hover:transition-transform"
              onClick={() =>
                increaseCartItemHandler(cartItem.product, dispatch)
              }
            >
              +
            </button>
          </div>
        </div>
      )}
    </>
  );
};
