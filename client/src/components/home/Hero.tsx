import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503392818113-f536eb27b250?auto=format&fit=crop&q=80&w=1600" 
          alt="Delicious Indonesian Food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white leading-tight mb-4">
            Authentic <span className="text-amber-400">Indonesian</span> Flavors
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover the authentic taste of Indonesia with our traditional Mie Ayam and Bakso served with love and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu">
              <a className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition text-center">
                View Our Menu
              </a>
            </Link>
            <a href="#locations" className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition text-center">
              Find Location
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.8 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ opacity: 1 }}
      >
        <a href="#specialties" className="flex flex-col items-center hover:opacity-100 transition">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
