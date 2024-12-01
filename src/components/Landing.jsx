import React from "react";
import { motion } from "framer-motion";
import Carousel from "./carousel/Carousel";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/services");
  }
  return (
    <div className="relative h-screen">
      <Carousel />
      <div className="absolute inset-0 bg-black/50 flex items-center z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Welcome to Etezazi Industries
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Rapid Response with Accurate Solutions
            </p>
            <button
              onClick={handleNavigate}
              className="bg-accent px-8 py-3 rounded-lg text-gray font-semibold hover:bg-opacity-90 transition-colors"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
