import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { LocationData } from "@/lib/constants";

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-white">
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
            Our Locations
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-4"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            Find Us Near You
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            Visit one of our 5 locations across Indonesia or order online for delivery.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=800" 
              alt="Map Location" 
              className="w-full h-[400px] object-cover" 
            />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            {LocationData.map((location, index) => (
              <motion.div 
                key={location.id} 
                className="mb-8"
                variants={fadeIn("left", "tween", 0.1 * (index + 1), 1)}
              >
                <h3 className="text-xl font-semibold font-poppins mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {location.address}
                </p>
                <p className="text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {location.phone}
                </p>
                <p className="text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {location.hours}
                </p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition">
                    Get Directions
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition">
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
