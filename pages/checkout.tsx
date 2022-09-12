import type { NextPage } from "next";
import { ChangeEvent } from "react";
import { useCartContext } from "../context/CartContext";

import Image from "next/future/image";
import { Trash } from "phosphor-react";

const Checkout: NextPage = () => {
  const { cartItems, getItemQuantity, cartTotalValue } = useCartContext();
  return (
    <div className="w-full h-full flex pt-20 justify-center bg-gray-100">
      {!cartItems || cartItems?.length <= 0 ? (
        <h1>Your cart is empty :( </h1>
      ) : (
        <div className="w-full max-w-xl bg-white shadow-lg h-72 rounded-lg p-5 flex flex-col gap-2">
          <div className="flex-1 flex items-center">
            {cartItems?.map((item) => (
              <div key={item.id} className="w-full flex items-center gap-2">
                {/* <img src={item.images[0]} alt="" className="w-16 h-auto" /> */}
                <Image
                  src={item.images[0]}
                  className="w-16 h-auto"
                  width="64"
                  height="64"
                  alt="ip14"
                />
                <h1 className="text-xl font-title font-medium">{item.name}</h1>
                <div className="flex-1 flex justify-end">
                  <input
                    type="number"
                    value={getItemQuantity(item.id)}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      event.target.valueAsNumber;
                    }}
                  />
                  <button className="p-4 bg-red-500 rounded-lg hover:bg-red-600">
                    <Trash size={20} weight="bold" color="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="w-full flex justify-between text-xl py-4">
            <h2>Total is: </h2>
            <div className="flex flex-col">
              <h3 className="text-xs"> - 5 $</h3>
              <h2 className="font-medium">$ {cartTotalValue}</h2>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name=""
              id=""
              className="w-full p-3 rounded-lg border-2 flex-1"
              placeholder="Kod rabatowy..."
            />
            <button className="p-3 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600">
              Wpisz kod rabatowy
            </button>
          </div> */}
          <button className="w-full p-3 bg-red-500 rounded-lg text-white font-medium text-xl hover:bg-red-600">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
