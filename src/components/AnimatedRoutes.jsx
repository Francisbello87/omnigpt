import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, SignIn, Contact, Blog, Verify } from "../container";
import Protected from "./Protected";

const AnimatedRoutes = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <AnimatePresence>
      <Routes location={location}  key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/verification"
          element={
            <Protected>
              <Verify />
            </Protected>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
