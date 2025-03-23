import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { useCart } from "@/hooks/useCart";

export default function OrderSuccess() {
  const [_, navigate] = useLocation();
  const { clearCart } = useCart();
  
  useEffect(() => {
    // Clear the cart when order is successful
    clearCart();
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, [clearCart]);

  return (
    <section className="py-20 bg-neutral-50 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
            variants={fadeIn("down", "tween", 0.2, 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-5xl font-playfair font-bold mb-4"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            Order Placed Successfully!
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            Thank you for your order. We are preparing your delicious food and will deliver it soon.
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 text-left"
          >
            <h3 className="text-xl font-medium mb-4">Order Details</h3>
            <p className="mb-2"><strong>Order Number:</strong> #CN-{Math.floor(1000000 + Math.random() * 9000000)}</p>
            <p className="mb-2"><strong>Estimated Delivery Time:</strong> 30-45 minutes</p>
            <p><strong>Status:</strong> <span className="text-primary">Processing</span></p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn("up", "tween", 0.6, 1)}
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => navigate("/menu")}
            >
              Order Again
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
