import type { NextPage } from "next";
import { ChangeEvent } from "react";
import { useCartContext } from "../context/CartContext";

const Checkout: NextPage = () => {
  const { cartItems, getItemQuantity } = useCartContext();
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      {!cartItems || cartItems?.length <= 0 ? (
        <h1>Your cart is empty :( </h1>
      ) : (
        <div className="w-full max-w-xl bg-white shadow-lg h-72 rounded-lg p-5 flex flex-col">
          <div className="flex-1">
            {cartItems?.map((item) => (
              <div key={item.id} className="w-full flex items-center gap-2">
                <img src={item.images[0]} alt="" className="w-16 h-auto" />
                <h1 className="text-xl font-title font-medium">{item.name}</h1>
                <div className="flex-1 flex justify-end">
                  <input
                    type="number"
                    value={getItemQuantity(item.id)}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      event.target.valueAsNumber;
                    }}
                  />
                  <button>Add</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full p-3 bg-red-500 rounded-lg text-white font-medium text-xl">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
