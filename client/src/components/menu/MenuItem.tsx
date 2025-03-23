import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@shared/schema";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/lib/utils";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(item);
    
    // Reset the button after a short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  return (
    <div className="bg-neutral-50 rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold font-poppins">{item.name}</h3>
          <span className="text-primary font-bold">{formatCurrency(item.price)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
        <button 
          className={`
            w-full py-2 text-sm font-medium rounded-lg transition flex items-center justify-center space-x-2
            ${isAdding 
              ? "bg-green-500 text-white" 
              : "bg-primary text-white hover:bg-primary/90"
            }
          `}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Added</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span>Add to Order</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
