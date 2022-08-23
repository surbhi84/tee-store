import { useCartContext } from "./CartContextProvider";

export const Promos = ({
  showPromos,
  setShowPromos,
  setPromoOff,
}: {
  showPromos: boolean;
  setShowPromos: React.Dispatch<React.SetStateAction<boolean>>;
  setPromoOff: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { cartState } = useCartContext();
  let cartPrice = cartState.reduce(
    (totalPriceAcc, productItem) =>
      (totalPriceAcc += productItem.quantity * productItem.product.price),
    0
  );
  return (
    <>
      {showPromos &&
        cartState.reduce(
          (totalPriceAcc, productItem) =>
            (totalPriceAcc += productItem.quantity * productItem.product.price),
          0
        ) > 0 && (
          <div className="flex flex-col absolute bg-white p-4 gap-2 top-50 border border-red-400 rounded-md sm:w-60">
            <div className="flex gap-2">
              <input
                type="checkbox"
                onChange={() => {
                  setPromoOff(50);
                  setShowPromos(false);
                }}
              />
              <p>
                Flat <span className="text-red-700"> ₹50 OFF </span> on all
                orders
              </p>
            </div>
            <div className="flex gap-2">
              <input
                className="disabled:bg-red-200"
                type="checkbox"
                onChange={() => {
                  setPromoOff(() => (cartPrice > 699 ? 100 : 0));
                  setShowPromos(false);
                }}
                disabled={cartPrice < 699}
              />
              <p>
                Flat <span className="text-red-700"> ₹100 OFF </span> on ₹699
                Order total
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                onChange={() => {
                  setPromoOff(() => (cartPrice > 1199 ? 200 : 0));

                  setShowPromos(false);
                }}
                disabled={cartPrice < 1199}
              />
              <p>
                Flat <span className="text-red-700"> ₹200 OFF </span> on ₹1199
                Order total
              </p>
            </div>
          </div>
        )}
    </>
  );
};
