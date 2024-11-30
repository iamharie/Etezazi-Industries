import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-secondary rounded-lg overflow-hidden shadow-lg"
    >
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={
            member.image ||
            "https://via.placeholder.com/300x300?text=Team+Member"
          }
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
        <p className="text-gray-300 mb-2">{member.position}</p>
        <p className="text-gray-400 text-sm mb-4">{member.description}</p>
        <div className="flex space-x-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="text-white hover:text-accent transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      description:
        "With over 20 years of experience in industrial engineering and leadership.",
      email: "john.smith@etezazi.com",
      linkedin: "https://linkedin.com/in/johnsmith",
    },
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      description: "Leading our technological innovations and R&D initiatives.",
      email: "sarah.johnson@etezazi.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
    {
      name: "Michael Chen",
      position: "Head of Engineering",
      description: "Expert in automation and manufacturing processes.",
      email: "michael.chen@etezazi.com",
      linkedin: "https://linkedin.com/in/michaelchen",
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      description: "Streamlining operations and ensuring quality excellence.",
      email: "emily.rodriguez@etezazi.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
    },
    {
      name: "David Kim",
      position: "Innovation Lead",
      description:
        "Driving forward-thinking solutions and strategic initiatives.",
      email: "david.kim@etezazi.com",
      linkedin: "https://linkedin.com/in/davidkim",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the experts behind Etezazi Industries' success. Our team brings
            together decades of experience in industrial innovation and
            leadership.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
