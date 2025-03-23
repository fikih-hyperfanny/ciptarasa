import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/lib/utils";

export default function CartSidebar() {
  const { 
    isCartOpen, 
    toggleCart, 
    cart, 
    cartTotal, 
    deliveryFee, 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart 
  } = useCart();
  const [_, navigate] = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };

  // Close the cart when ESC key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        toggleCart();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isCartOpen, toggleCart]);

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetContent className="flex flex-col w-full sm:max-w-md p-0">
        <SheetHeader className="bg-primary text-white p-4">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-white font-poppins">Your Order</SheetTitle>
            <SheetClose ref={closeButtonRef} className="text-white hover:text-amber-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="flex-grow p-4 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-60 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add delicious items from our menu</p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.quantity} × {formatCurrency(item.price)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        className="text-gray-500 hover:text-primary w-6 h-6 flex items-center justify-center rounded-full bg-gray-100"
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label="Decrease quantity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="mx-1 w-6 text-center">{item.quantity}</span>
                      <button 
                        className="text-gray-500 hover:text-primary w-6 h-6 flex items-center justify-center rounded-full bg-gray-100"
                        onClick={() => increaseQuantity(item.id)}
                        aria-label="Increase quantity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <button 
                        className="text-gray-400 hover:text-red-500 ml-1"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-medium">{formatCurrency(cartTotal)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Delivery Fee</span>
            <span className="font-medium">{formatCurrency(deliveryFee)}</span>
          </div>
          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>Total</span>
            <span className="text-primary">{formatCurrency(cartTotal + deliveryFee)}</span>
          </div>
          <Button
            className="w-full py-6 bg-primary hover:bg-primary/90 text-white"
            disabled={cart.length === 0}
            onClick={handleCheckout}
          >
            <span>Proceed to Checkout</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
