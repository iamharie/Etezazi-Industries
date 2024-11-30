import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Manufacturing",
      description: "State-of-the-art manufacturing facilities and processes.",
    },
    {
      title: "Engineering",
      description:
        "Expert engineering solutions for complex industrial challenges.",
    },
    {
      title: "Consulting",
      description:
        "Professional consulting services for industrial optimization.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary p-6 rounded-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
