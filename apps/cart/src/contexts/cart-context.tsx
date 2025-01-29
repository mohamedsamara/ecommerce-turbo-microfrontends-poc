import React, { createContext, useContext, useState, ReactNode } from "react";

export type CartItemState = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

type CartContextType = {
  cartItems: CartItemState[];
  addToCart: (item: CartItemState) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemState[]>([]);

  const addToCart = (item: CartItemState) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      updateQuantity(item.id, item.quantity + isItemInCart.quantity);
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
