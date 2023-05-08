import React from "react";
import { images } from "../../constants";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { integrations } from "../../utils/data";

const Integrations = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  if (
    pathname === "/signin" ||
    pathname === "/blog" ||
    pathname === "/contact" ||
    pathname === "/verification"
  )
    return null;
  // else{
  //   return
  // };

  return (
    <div className="bg-black mt-[156px] py-36 hidden lg:block  w-screen lg:px-20 text-white">
      <div className="lg:max-w-[1440px]">
        <motion.h2
          transition={{ duration: 0.8 }}
          className="font-medium text-left font-FSMeridian text-6xl max-w-[625px]"
        >
          <motion.span
            transition={{ duration: 1.3 }}
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
          >
            Integrations
          </motion.span>{" "}
          to Boost Your Workflow
        </motion.h2>
        <div className="grid grid-cols-3 gap-6 mt-11">
          {integrations &&
            integrations.map((integration) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, border: "3px solid #1FC77E" }}
                key={integration.id}
                className="bg-white drop-shadow-lg cursor-pointer text-black p-6 rounded-md"
              >
                <motion.div className="flex items-center mb-4">
                  <motion.img
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="mr-3 w-9 h-9"
                    src={integration.image}
                    alt="WhatsApp Icon"
                  />
                  <motion.h5
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="text-xl "
                  >
                    {integration.title}
                  </motion.h5>
                </motion.div>
                <motion.p
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="font-GeneralSansRegular text-sm w-[282px]"
                >
                  {integration.description}
                </motion.p>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
