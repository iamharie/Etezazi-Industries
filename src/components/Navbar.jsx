import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open");
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <nav className="bg-secondary text-gray py-4 sticky top-0 z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold">
            {/* Etezazi Industries */}
            <img src={logo} alt="Etezazi Industries" className="w-30 h-10" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold transition-colors"
                  : "hover:text-accent transition-colors"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold transition-colors"
                  : "hover:text-accent transition-colors"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold transition-colors"
                  : "hover:text-accent transition-colors"
              }
            >
              Team
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold transition-colors"
                  : "hover:text-accent transition-colors"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-0 right-0 top-full bg-primary shadow-lg"
            >
              <div className="flex flex-col space-y-4 p-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold transition-colors"
                      : "hover:text-accent transition-colors"
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold transition-colors"
                      : "hover:text-accent transition-colors"
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold transition-colors"
                      : "hover:text-accent transition-colors"
                  }
                  onClick={closeMenu}
                >
                  Team
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold transition-colors"
                      : "hover:text-accent transition-colors"
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     document.body.classList.toggle("menu-open");
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     document.body.classList.remove("menu-open");
//   };

//   return (
//     <nav className="bg-primary text-white py-4 relative z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold">
//             Etezazi Industries
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="hover:text-accent transition-colors">
//               Home
//             </Link>
//             <Link
//               to="/services"
//               className="hover:text-accent transition-colors"
//             >
//               Services
//             </Link>
//             <Link to="/team" className="hover:text-accent transition-colors">
//               Team
//             </Link>
//             <Link to="/contact" className="hover:text-accent transition-colors">
//               Contact
//             </Link>
//           </div>

//           {/* Hamburger Button */}
//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden absolute left-0 right-0 top-full bg-primary shadow-lg"
//             >
//               <div className="flex flex-col space-y-4 p-4">
//                 <Link
//                   to="/"
//                   className="hover:text-accent transition-colors"
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="hover:text-accent transition-colors"
//                   onClick={closeMenu}
//                 >
//                   Services
//                 </Link>
//                 <Link
//                   to="/team"
//                   className="hover:text-accent transition-colors"
//                   onClick={closeMenu}
//                 >
//                   Team
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="hover:text-accent transition-colors"
//                   onClick={closeMenu}
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
