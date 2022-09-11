import { List, ShoppingCartSimple, X } from "phosphor-react";
import { useState } from "react";

import ScrollLock from "react-scrolllock";
import { useCartContext } from "../context/CartContext";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { cartQuantity } = useCartContext();
  return (
    <>
      <header className="w-full flex justify-between items-center py-6 px-5 sticky bg-white top-0 left-0 right-0 border-b z-10">
        <div>
          <button
            className="rounded-lg hover:bg-gray-200 p-2"
            onClick={() => setOpen((prevValue) => !prevValue)}
          >
            <List size={32} weight="bold" />
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-medium">One Product Shop</h1>
        </div>
        <div>
          <button className="rounded-lg hover:bg-gray-200 p-2">
            <ShoppingCartSimple size={32} weight="bold" />
            {cartQuantity > 0 && (
              <span className="inline-flex absolute top-3 right-3 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartQuantity}
              </span>
            )}
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 h-full w-screen bg-white z-10 flex flex-col items-center justify-center">
          <button
            className="rounded-lg hover:bg-gray-200 p-2 absolute right-10 top-10"
            onClick={() => setOpen((prevValue) => !prevValue)}
          >
            <X size={32} weight="bold" />
          </button>
          <ul className="text-xl text-center gap-10 flex flex-col">
            <li className="cursor-pointer hover:bg-gray-200 rounded-lg">
              Homepage
            </li>
            <li className="cursor-pointer hover:bg-gray-200 rounded-lg">
              Checkout
            </li>
            <li className="cursor-pointer hover:bg-gray-200 rounded-lg">
              Terms and conditions
            </li>
            <li className="cursor-pointer hover:bg-gray-200 rounded-lg">
              Returns
            </li>
          </ul>
        </div>
      )}
      <ScrollLock isActive={isOpen} />
    </>
  );
};

export default Header;
