import { useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function About() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <span className="text-primary font-medium">About Us</span>
          <h1 className="text-3xl md:text-5xl font-playfair font-bold mt-2 mb-4">Our Story</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Learn about our journey to bring authentic Indonesian flavors to your table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Heritage</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, CiptarasaNusantara began as a small family-owned warung in Jakarta, dedicated to preserving authentic Indonesian flavors while bringing them to a wider audience.
            </p>
            <p className="text-gray-600 mb-4">
              Our recipes have been passed down through three generations, and we take pride in using only the freshest ingredients sourced from local farmers. Each bowl of Mie Ayam and Bakso is crafted with love and attention to detail.
            </p>
            <p className="text-gray-600">
              We believe that food is more than just sustenance—it's a way to connect with our culture, our community, and our loved ones. That's why we put so much care into every dish we serve.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1626082922482-ac8b9b2817ba?auto=format&fit=crop&q=80&w=800" 
                alt="Our Restaurant" 
                className="w-full h-[400px] object-cover" 
              />
            </div>
            <div className="absolute top-[10%] -right-[5%] w-2/3 h-64 rounded-xl overflow-hidden shadow-xl z-20 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1605333396915-47ffad9b6dcd?auto=format&fit=crop&q=80&w=500" 
                alt="Chef Preparing Food" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-[5%] -left-[5%] w-1/2 h-48 rounded-xl overflow-hidden shadow-xl z-20 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=400" 
                alt="Ingredients" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg text-center"
            variants={fadeIn("up", "tween", 0.1, 1)}
          >
            <div className="text-4xl font-bold text-primary mb-2">12+</div>
            <div className="text-xl font-medium mb-2">Years Experience</div>
            <p className="text-gray-600">Over a decade of serving authentic Indonesian cuisine.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg text-center"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <div className="text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-xl font-medium mb-2">Locations</div>
            <p className="text-gray-600">Serving customers across major Indonesian cities.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg text-center"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-xl font-medium mb-2">Satisfaction</div>
            <p className="text-gray-600">Committed to quality and customer happiness.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-primary/5 p-8 md:p-12 rounded-xl"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            At CiptarasaNusantara, our mission is to preserve and promote the rich culinary heritage of Indonesia through 
            authentic, high-quality food that brings people together. We are committed to using traditional recipes and fresh, 
            locally-sourced ingredients to create dishes that honor our cultural roots while delighting our customers' palates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
