"use client";
import { createContext, useState, useContext } from "react";

interface CartContextProps {
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<string[]>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<string[]>([]);

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