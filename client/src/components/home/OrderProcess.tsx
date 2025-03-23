import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const steps = [
  {
    id: 1,
    title: "Choose Your Favorites",
    description: "Browse our menu and select your favorite dishes and customize as needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Add to Cart",
    description: "Review your selections and add them to your cart for checkout.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Quick Payment",
    description: "Securely pay online with multiple payment options available.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Fast Delivery",
    description: "Track your order as it makes its way to your doorstep.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  }
];

export default function OrderProcess() {
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
          <motion.span 
            className="text-primary font-medium"
            variants={fadeIn("up", "tween", 0.1, 1)}
          >
            How It Works
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-4"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            Easy Ordering Process
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            Getting your favorite Indonesian dishes delivered is quick and simple.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.id} 
              step={step} 
              index={index} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Link href="/menu">
            <a className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition">
              Order Now
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, isLast }: { 
  step: { id: number; title: string; description: string; icon: React.ReactNode; };
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div 
      className="text-center"
      variants={fadeIn("up", "tween", 0.1 * (index + 1), 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <div className="text-2xl text-primary">{step.icon}</div>
      </div>
      <div className="relative mb-6">
        {!isLast && (
          <span className="absolute top-1/2 left-full transform -translate-y-1/2 w-full h-1 bg-primary/20 hidden lg:block"></span>
        )}
        <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto">
          {step.id}
        </div>
      </div>
      <h3 className="text-xl font-semibold font-poppins mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </motion.div>
  );
}
