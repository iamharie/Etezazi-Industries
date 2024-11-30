import React from "react";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Etezazi Industries</h3>
            <p>Rapid Response with Accurate Solutions </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@etezazi.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={null}
                className="flex flex-col items-center hover:text-accent transition-colors cursor-pointer"
              >
                <FaLinkedin size={24} />
                <span className="mt-2 text-sm">LinkedIn</span>
              </a>
              <a
                href={null}
                className="flex flex-col items-center hover:text-accent transition-colors cursor-pointer"
              >
                <FaTwitterSquare size={24} />
                <span className="mt-2 text-sm">Twitter</span>
              </a>

              <a
                href={null}
                className="flex flex-col items-center hover:text-accent transition-colors cursor-pointer"
              >
                <FaFacebookSquare size={24} />
                <span className="mt-2 text-sm">Facebook</span>
              </a>
            </div>
            {/* <div className="space-x-4 cursor-pointer">
              <a href={null} className="hover:text-accent ">
                LinkedIn
              </a>
              <a href={null} className="hover:text-accent">
                Twitter
              </a>
              <a href={null} className="hover:text-accent">
                Facebook
              </a>
            </div> */}
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
