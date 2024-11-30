import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Etezazi Industries</h3>
            <p>Leading the future of industrial innovation</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@etezazi.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="hover:text-accent">
                LinkedIn
              </a>
              <a href="#" className="hover:text-accent">
                Twitter
              </a>
              <a href="#" className="hover:text-accent">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Etezazi Industries. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
