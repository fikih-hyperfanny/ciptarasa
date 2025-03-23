import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            <motion.span 
              className="text-primary font-medium"
              variants={fadeIn("right", "tween", 0.1, 1)}
            >
              Kisah Kami
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6"
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              Resep Tradisional dengan Sentuhan Modern
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-4"
              variants={fadeIn("right", "tween", 0.3, 1)}
            >
              Didirikan pada tahun 2010, CiptarasaNusantara berawal dari sebuah warung keluarga kecil di Jakarta, yang berdedikasi melestarikan cita rasa asli Indonesia sambil memperkenalkannya kepada khalayak yang lebih luas.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={fadeIn("right", "tween", 0.4, 1)}
            >
              Resep kami telah diwariskan selama tiga generasi, dan kami bangga menggunakan bahan-bahan terbaik yang bersumber dari petani lokal. Setiap mangkuk Mie Ayam dan Bakso dibuat dengan penuh cinta dan perhatian terhadap detail.
            </motion.p>
            <motion.div 
              className="flex space-x-6 mt-8"
              variants={fadeIn("right", "tween", 0.5, 1)}
            >
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-gray-600">Lokasi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">Kepuasan</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative z-10 rounded-xl overflow-hidden shadow-xl"
              variants={fadeIn("left", "tween", 0.2, 1)}
            >
              <img 
                src="https://images.unsplash.com/photo-1626082922482-ac8b9b2817ba?auto=format&fit=crop&q=80&w=800" 
                alt="Restoran Kami" 
                className="w-full h-[400px] object-cover" 
              />
            </motion.div>
            <motion.div 
              className="absolute top-[10%] -right-[5%] w-2/3 h-64 rounded-xl overflow-hidden shadow-xl z-20 hidden lg:block"
              variants={fadeIn("left", "tween", 0.3, 1)}
            >
              <img 
                src="https://images.unsplash.com/photo-1605333396915-47ffad9b6dcd?auto=format&fit=crop&q=80&w=500" 
                alt="Koki Menyiapkan Makanan" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-[5%] -left-[5%] w-1/2 h-48 rounded-xl overflow-hidden shadow-xl z-20 hidden lg:block"
              variants={fadeIn("left", "tween", 0.4, 1)}
            >
              <img 
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=400" 
                alt="Bahan-bahan" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
