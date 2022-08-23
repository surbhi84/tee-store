import { rawProduct } from "../data";
import { addToCartHandler } from "../cartHandlers";
import { useCartContext } from "./CartContextProvider";

export const ProductCard = ({ product }: { product: rawProduct }) => {
  const { cartState, dispatch } = useCartContext();

  console.log(cartState, "hurr");

  return (
    <div className="h- w-64 shadow-lg flex flex-col p-2 object-cover">
      <img src={product.img} className="w-[100%] h-64 " />
      <span>{product.name}</span>

      <div className="flex gap-2 ml-auto mt-auto">
        <span>₹{product.price}</span>
        <button
          className="bg-red-200 px-2 rounded-sm border border-red-800 hover:scale-105 "
          onClick={() => addToCartHandler(product, dispatch)}
        >
          Add +
        </button>
      </div>
    </div>
  );
};
