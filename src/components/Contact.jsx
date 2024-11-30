import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-secondary text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-secondary text-white"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full p-3 rounded bg-secondary text-white h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent px-8 py-3 rounded-lg text-white font-semibold hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
