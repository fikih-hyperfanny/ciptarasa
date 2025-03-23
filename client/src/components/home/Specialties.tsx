import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { formatCurrency } from "@/lib/utils";
import { SpecialtyItems } from "@/lib/constants";

// Define MenuItem type locally
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
};

export default function Specialties() {
  const { addToCart } = useCart();
  const { data: specialties = SpecialtyItems } = useQuery<MenuItem[]>({
    queryKey: ['/api/specialties'],
  });

  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.span 
            className="text-primary font-medium"
            variants={fadeIn("up", "tween", 0.1, 1)}
          >
            Menu Spesial Kami
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-4"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            Hidangan Unggulan
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            Hidangan spesial Indonesia kami dimasak dengan resep tradisional yang diwariskan turun-temurun.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item: MenuItem, index: number) => (
            <SpecialtyCard 
              key={item.id}
              item={item}
              index={index}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/menu" className="inline-flex items-center space-x-2 text-primary font-medium hover:text-secondary transition">
            <span>Lihat Menu Lengkap</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SpecialtyCard({ item, index, onAddToCart }: { 
  item: { id: number; name: string; description: string; price: number; image: string; };
  index: number;
  onAddToCart: () => void;
}) {
  return (
    <motion.div
      className="bg-ciptarasa-yellow-light rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
      variants={fadeIn("up", "tween", 0.1 * index, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold font-poppins">{item.name}</h3>
          <span className="text-primary font-bold">{formatCurrency(item.price)}</span>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <button 
          className="w-full py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition flex items-center justify-center space-x-2"
          onClick={onAddToCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span>Tambahkan ke Pesanan</span>
        </button>
      </div>
    </motion.div>
  );
}
