import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    name: "Siti Nurhaliza",
    location: "Jakarta",
    rating: 5,
    testimonial: "Mie Ayam terenak yang pernah saya coba! Kuahnya sangat lezat dan ayamnya empuk. Saya juga sangat merekomendasikan Bakso Beranak!",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    name: "Budi Santoso",
    location: "Bandung",
    rating: 4.5,
    testimonial: "Saya memesan dari CiptarasaNusantara setidaknya seminggu sekali. Pengiriman mereka selalu tepat waktu dan makanan masih panas saat tiba. Pelayanan luar biasa!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Dewi Lestari",
    location: "Surabaya",
    rating: 5,
    testimonial: "Keaslian cita rasa mengingatkan saya pada jajanan kaki lima yang saya nikmati sejak kecil. Pangsit Goreng mereka sangat renyah dan lezat!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-ciptarasa-yellow-dark">
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
            Ulasan Pelanggan
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-4"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            Apa Kata Pelanggan Kami
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            Dengarkan pengalaman pelanggan kami yang puas dengan makanan dan layanan kami.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { 
  testimonial: { 
    id: number; 
    name: string; 
    location: string; 
    rating: number; 
    testimonial: string; 
    image: string;
  };
  index: number;
}) {
  return (
    <motion.div 
      className="bg-ciptarasa-yellow-light p-6 rounded-xl shadow hover:shadow-md transition duration-300"
      variants={fadeIn("up", "tween", 0.1 * (index + 1), 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-amber-400 flex">
          {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
            <StarIcon key={i} filled />
          ))}
          {testimonial.rating % 1 !== 0 && <StarIcon half />}
        </div>
        <span className="ml-2 text-gray-600">{testimonial.rating.toFixed(1)}</span>
      </div>
      <p className="text-gray-600 mb-6">"{testimonial.testimonial}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

function StarIcon({ filled, half }: { filled?: boolean; half?: boolean }) {
  if (filled) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  
  if (half) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    );
  }
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}
