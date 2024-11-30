import React from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "Manufacturing Excellence",
      description:
        "State-of-the-art manufacturing facilities with advanced automation and quality control.",
      icon: "🏭",
    },
    {
      title: "Engineering Solutions",
      description:
        "Custom engineering solutions tailored to meet your specific industrial needs.",
      icon: "⚙️",
    },
    {
      title: "Consulting Services",
      description:
        "Expert consulting to optimize your industrial processes and operations.",
      icon: "📊",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control and testing procedures for all products.",
      icon: "✓",
    },
  ];

  return (
    <section className="py-20 bg-primary min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-secondary p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
