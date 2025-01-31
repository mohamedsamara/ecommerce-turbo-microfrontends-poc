import { create } from "zustand";

export type CartItemState = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

interface CartStore {
  cartItems: CartItemState[];
  addToCart: (item: CartItemState) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getSubtotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (item) =>
    set((state) => {
      const isItemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, item] };
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),

  getSubtotal: () =>
    get().cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    ),
}));
