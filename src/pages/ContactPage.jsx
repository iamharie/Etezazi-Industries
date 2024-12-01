import React from "react";
import { motion } from "framer-motion";
import Form from "../components/Form";

const ContactPage = () => {
  return (
    <section className="py-20 bg-primary min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-gray"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p>
                  <strong>Address:</strong>
                  <br />
                  2101 E 21st St N,
                  <br />
                  Wichita, KS 67214
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  info@etezazi.com
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  (316) 831-9937
                </p>
              </div>
            </div>
            <div>
              <Form />
              {/* <form className="space-y-6">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-secondary text-gray"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded bg-secondary text-gray"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    className="w-full p-3 rounded bg-secondary text-gray h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-accent px-8 py-3 rounded-lg text-gray font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
