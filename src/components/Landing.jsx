import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-primary text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Etezazi Industries
          </h1>
          <p className="text-xl mb-8">
            Leading the way in innovative industrial solutions and manufacturing
            excellence.
          </p>
          <button className="bg-accent px-8 py-3 rounded-lg text-white font-semibold hover:bg-opacity-90 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
