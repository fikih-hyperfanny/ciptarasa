import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@shared/schema";
import MenuItemCard from "@/components/menu/MenuItem";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";

type Category = "all" | "mie-ayam" | "bakso" | "sides" | "drinks";

export default function MenuList({ menuItems }: { menuItems: MenuItem[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "mie-ayam", label: "Mie Ayam" },
    { key: "bakso", label: "Bakso" },
    { key: "sides", label: "Sides" },
    { key: "drinks", label: "Drinks" }
  ];

  return (
    <>
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        {categories.map((category, index) => (
          <motion.div 
            key={category.key}
            variants={fadeIn("up", "tween", 0.05 * index, 1)}
          >
            <Button
              variant={activeCategory === category.key ? "default" : "outline"}
              className={`
                px-6 py-2 rounded-full font-medium
                ${activeCategory === category.key 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </Button>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up", "tween", 0.05 * index, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <MenuItemCard item={item} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No items found in this category.
          </div>
        )}
      </div>
    </>
  );
}
