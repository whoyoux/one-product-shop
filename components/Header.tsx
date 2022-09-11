import { List, ShoppingCartSimple } from "phosphor-react";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-6 px-5 sticky bg-white top-0 left-0 right-0 border-b z-10">
      <div>
        <button className="rounded-lg hover:bg-gray-200 p-2">
          <List size={32} weight="bold" />
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-medium">One Product Shop</h1>
      </div>
      <div>
        <button className="rounded-lg hover:bg-gray-200 p-2">
          <ShoppingCartSimple size={32} weight="bold" />
        </button>
      </div>
    </header>
  );
};

export default Header;
