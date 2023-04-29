import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, SignIn, Contact, Blog } from "../container";
import { AuthContextProvider } from "../context/StateProvider";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // <AuthContextProvider>
      <AnimatePresence>
        <Routes location={location} >
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
    // {/* </AuthContextProvider> */}
  );
};

export default AnimatedRoutes;
