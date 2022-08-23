import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContextProvider";
import { Promos } from "./Promos";

export const CartDetails = () => {
  const { cartState } = useCartContext();
  const [promoOff, setPromoOff] = useState(0);
  const [showPromos, setShowPromos] = useState(false);
  console.log(
    cartState.reduce(
      (totalPriceAcc, productItem) =>
        (totalPriceAcc += productItem.quantity * productItem.product.price),
      0
    ) - promoOff
  );

  return (
    <>
      {cartState.length > 0 ? (
        <div className="flex flex-col gap-2 relative sm:w-60 p-2">
          <span className="flex justify-between">
            <p> Total Item:</p>
            {cartState.reduce(
              (totalProductsAcc, productItem) =>
                (totalProductsAcc += productItem.quantity),
              0
            )}
          </span>

          <span className="flex justify-between">
            <p> Cart Total : </p>₹
            {cartState.reduce(
              (totalPriceAcc, productItem) =>
                (totalPriceAcc +=
                  productItem.quantity * productItem.product.price),
              0
            )}
          </span>

          <span className="flex justify-between">
            <p>Coupon Discount : </p>₹{promoOff}
          </span>

          <span className="flex justify-between">
            <p>Discounted Total : </p>₹
            {promoOff > 0 ? (
              <>
                {cartState.reduce(
                  (totalPriceAcc, productItem) =>
                    (totalPriceAcc +=
                      productItem.quantity * productItem.product.price),
                  0
                ) - promoOff}
              </>
            ) : (
              0
            )}
          </span>

          <button
            onClick={() => setShowPromos(true)}
            className={` ${
              promoOff > 0 ? "bg-emerald-300" : "bg-red-200"
            } px-2 rounded-sm border border-red-800 hover:scale-105 hover:transition-transform`}
          >
            {promoOff > 0 ? "Promo code applied" : "Apply Promo Code"}
          </button>

          {promoOff > 0 && (
            <button
              className="bg-red-200 px-2 rounded-sm border border-red-800 hover:scale-105 hover:transition-transform"
              onClick={() => setPromoOff(0)}
            >
              Remove promo code
            </button>
          )}

          <button className="flex justify-center items-center gap-2 bg-red-200 p-2 mt-auto rounded-md border border-red-800 hover:scale-105 hover:transition-transform">
            <img src="cart.svg" className="h-6" />
            Checkout
          </button>

          <Promos
            showPromos={showPromos}
            setShowPromos={setShowPromos}
            setPromoOff={setPromoOff}
          />
        </div>
      ) : (
        <div className="flex items-center">
          <h3>No Products in your Cart!</h3>
          <Link to="/" className="text-blue-700">
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};
