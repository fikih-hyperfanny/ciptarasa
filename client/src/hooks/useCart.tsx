import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  isCartOpen: boolean;
  toggleCart: () => void;
  cart: CartItem[];
  cartTotal: number;
  cartItemsCount: number;
  deliveryFee: number;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "ciptarasanusantara-cart";
const DELIVERY_FEE = 10000; // Rp 10.000

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse saved cart:", error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);
  
  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // Item already in cart, increase quantity
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        // Item not in cart, add it with quantity 1
        return [...prevCart, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };
  
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };
  
  const increaseQuantity = (id: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };
  
  const decreaseQuantity = (id: number) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.id === id);
      
      if (item && item.quantity === 1) {
        // If quantity is 1, remove the item
        return prevCart.filter(item => item.id !== id);
      }
      
      // Otherwise, decrease the quantity
      return prevCart.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      );
    });
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        cart,
        cartTotal,
        cartItemsCount,
        deliveryFee: DELIVERY_FEE,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
