declare module "@ecommerce/cart/components" {
  export const MiniCart: React.FC;

  export const CartFooter: React.FC<{ subtotal: number }>;
}

declare module "@ecommerce/shop/entry" {
  const Shop: React.FC;
  export default Shop;
}

declare module "@ecommerce/state/stores" {
  import * as zustand from "zustand";
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
  export const useCartStore: zustand.UseBoundStore<zustand.StoreApi<CartStore>>;
}
