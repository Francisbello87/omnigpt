import "./App.css";
import Navbar from "./components/Navbar";
import { AnimatedRoutes } from "./components";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Integrations, Testimonial, Verify } from "./container";
import { AuthContextProvider } from "./context/AuthContext";
// import { AuthContextProvider } from "./context/StateProvider";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <AuthContextProvider>
          <Navbar />
          <div>
            <AnimatedRoutes />
          </div>
          <Integrations />
          <Testimonial />
          <Footer />
        </AuthContextProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
