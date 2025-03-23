import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function Checkout() {
  const [location, navigate] = useLocation();
  const { cart, cartTotal, deliveryFee } = useCart();

  // If cart is empty, redirect to menu
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/menu");
    }
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, [cart, navigate]);

  if (cart.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <span className="text-primary font-medium">Checkout</span>
          <h1 className="text-3xl md:text-5xl font-playfair font-bold mt-2 mb-4">Complete Your Order</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            You're just a few steps away from enjoying delicious Indonesian food!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <CheckoutForm />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.quantity} × {item.name}</span>
                    <span>{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span className="font-medium">{formatCurrency(cartTotal)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery Fee</span>
                  <span className="font-medium">{formatCurrency(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">{formatCurrency(cartTotal + deliveryFee)}</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mb-3"
                onClick={() => navigate("/menu")}
              >
                Add More Items
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
