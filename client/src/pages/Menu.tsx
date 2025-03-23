import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import MenuList from "@/components/menu/MenuList";
import { staggerContainer } from "@/lib/animations";

export default function Menu() {
  const { data: menuItems, isLoading, error } = useQuery({
    queryKey: ['/api/menu'],
  });

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <span className="text-primary font-medium">Our Menu</span>
          <h1 className="text-3xl md:text-5xl font-playfair font-bold mt-2 mb-4">Discover Our Delicious Options</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our full menu of authentic Indonesian dishes, from traditional Mie Ayam and Bakso to refreshing drinks.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading menu items...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">Failed to load menu items. Please try again later.</p>
          </div>
        ) : (
          <MenuList menuItems={menuItems || []} />
        )}
      </div>
    </section>
  );
}
