import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import heroImage from '/assets/heroimage.webp';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-semibold cursor-pointer hover:text-gray-300 transition"
          >
            NZURI
          </div>

          <div className="flex gap-8 text-sm uppercase tracking-wider">
            <button onClick={() => navigate("/product")} className="hover:text-yellow-400 transition">
              Shop
            </button>
            <button onClick={() => navigate("/blog")} className="hover:text-yellow-400 transition">
              Blog
            </button>
            <button onClick={() => navigate("/style-guide")} className="hover:text-yellow-400 transition">
              Style Guide
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />

        {/* Foreground Text */}
        <div className="relative z-10 text-center text-white px-6 max-w-xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Premium Streetwear for the Next Generation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2 text-lg text-gray-300"
          >
            Designed in Lagos. Worn worldwide. Unisex comfort meets Gen Z flex.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => navigate("/product")}
            className="btn-primary mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Shop the Drop
          </motion.button>
        </div>
      </section>
    </>
  );
}
