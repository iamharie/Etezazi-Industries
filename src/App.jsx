import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import Root from "./pages/Root";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <ServicesPage /> },
        { path: "team", element: <TeamPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );

  // <Router>
  //   <div className="min-h-screen bg-primary flex flex-col">
  //     <Navbar />
  //     <main className="flex-grow">
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/services" element={<ServicesPage />} />
  //         <Route path="/team" element={<TeamPage />} />
  //         <Route path="/contact" element={<ContactPage />} />
  //       </Routes>
  //     </main>
  //     <Footer />
  //   </div>
  // </Router>
}

export default App;
