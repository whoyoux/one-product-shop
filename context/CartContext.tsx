import { useContext, createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
  children: ReactNode;
};

type ItemProps = {
  id: string;
  name: string;
  description: string;
  images: string[];
  active: boolean;
  price: number;
};

interface CartItemProps extends ItemProps {
  quantity: number;
}

type ICartContext = {
  cartItems: CartItemProps[];
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: ItemProps) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  setItemQuantity: (id: string, qty: number) => void;
  cartQuantity: number;
  cartTotalValue: number;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<ICartContext>({} as ICartContext);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const cartQuantity =
    cartItems?.reduce((quantity, item) => item.quantity + quantity, 0) || 0;

  const cartTotalValue =
    cartItems?.reduce(
      (totalValue, item) => totalValue + item.price * item.quantity,
      0
    ) || 0;

  function increaseCartQuantity(itemToInc: ItemProps) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === itemToInc.id) == null) {
        return [
          ...currItems,
          {
            ...itemToInc,
            quantity: 1,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === itemToInc.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function setItemQuantity(id: string, qty: number) {
    if (qty < 1 || qty > 99) return;
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: qty };
        } else {
          return item;
        }
      });
    });
  }

  const clear = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        clear,
        openCart,
        closeCart,
        cartQuantity,
        cartTotalValue,
        cartItems,
        setItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
