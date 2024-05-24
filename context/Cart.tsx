"use client";
import { createContext, useState, useContext } from "react";

interface CartItem {
  price: number;
  adult: boolean;
  title: string;
  poster_path: string;
}

const CartContext = createContext<{ cart: CartItem[]; setCart: React.Dispatch<React.SetStateAction<CartItem[]>> } | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
}