import "./App.css";
import Navbar from "./components/Navbar";
import { AnimatedRoutes } from "./components";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { Footer, Integrations, Testimonial } from "./container";
import { AuthContextProvider } from "./context/StateProvider";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Navbar />
        <div className="App w-screen px-5 md:px-16 mt-20 lg:mt-28 lg:px-20">
          <AnimatedRoutes />
        </div>
        <Integrations />
        <Testimonial />
        <Footer />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
