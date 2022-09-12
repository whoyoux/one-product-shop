import type { NextPage } from "next";
import { useCartContext } from "../context/CartContext";

import Image from "next/future/image";
import { Trash, Minus, Plus } from "phosphor-react";
import Head from "next/head";

const Checkout: NextPage = () => {
  const {
    cartItems,
    getItemQuantity,
    cartTotalValue,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useCartContext();

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="w-full h-full flex pt-20 justify-center bg-gray-100">
        {!cartItems || cartItems?.length <= 0 ? (
          <h1>Your cart is empty :( </h1>
        ) : (
          <div className="w-full max-w-xl bg-white shadow-lg h-min rounded-lg p-5 flex flex-col gap-2">
            <div className="flex-1 flex items-center">
              {cartItems?.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex flex-col md:flex-row items-center justify-between gap-2"
                >
                  <div className="flex gap-2 items-center w-full">
                    {/* <img src={item.images[0]} alt="" className="w-16 h-auto" /> */}
                    <Image
                      src={item.images[0]}
                      className="w-16 h-auto"
                      width="64"
                      height="64"
                      alt="ip14"
                    />
                    <h1 className="text-xl font-title font-medium">
                      {item.name}
                    </h1>
                  </div>
                  <div className="flex justify-end w-full gap-2">
                    <div className="flex flex-1 md:flex-initial items-center gap-2">
                      <button
                        className="w-12 md:w-10 h-full bg-red-500 rounded-lg text-white flex items-center justify-center cursor-pointer select-none"
                        onClick={() => decreaseCartQuantity(item.id)}
                      >
                        <Minus size={16} color="white" weight="bold" />
                      </button>
                      <div className="w-16 h-full rounded-lg px-3 border-2 flex items-center justify-center">
                        {getItemQuantity(item.id)}
                      </div>
                      <button
                        className="disabled:cursor-not-allowed w-12 md:w-10 h-full bg-red-500 rounded-lg text-white flex items-center justify-center cursor-pointer select-none"
                        onClick={() => increaseCartQuantity(item)}
                        disabled={getItemQuantity(item.id) === 15}
                      >
                        <Plus size={16} color="white" weight="bold" />
                      </button>
                    </div>
                    <button
                      className="p-4 bg-red-500 rounded-lg hover:bg-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash size={20} weight="bold" color="white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-between text-xl py-4">
              <h2>Total is: </h2>
              <div className="flex flex-col text-right">
                <h2 className="text-sm text-gray-800">
                  subtotal ${cartTotalValue}
                </h2>
                <h2 className="text-sm text-gray-800">shipping $15</h2>
                <h2 className="text-sm text-gray-800">tax $20</h2>
                <h2 className="font-medium text-2xl">
                  Total ${cartTotalValue + 35}
                </h2>
              </div>
            </div>
            {/* <div className="flex gap-2">
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
            <button className="w-full p-3 bg-red-500 rounded-lg text-white font-medium text-xl hover:bg-red-600 flex items-center justify-center gap-4">
              Pay with{" "}
              <img
                src="/stripe-logo.png"
                className="w-[60px] h-auto inline-block"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
