import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiSearch, BiPlus } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { images } from "../../constants";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  const handleSidebarOpen = () => {
    setIsActive(true);
  };
  const handleSidebarclose = () => {
    setIsActive(false);
  };


  return (
    <motion.div
      transition={{ duration: 0.85, ease: "easeOut" }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      className="side h-full hidden lg:block bg-[#111826] relative"
    >
      {isActive ? (
        <motion.div
          transition={{ duration: 0.85, ease: "easeOut" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          className="sidebar  relative z-10  bg-[#111826] h-full pt-2 px-2    "
        >
          <motion.div className="relative h-full">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-[256px]"
            >
              <div className="flex items-center bg-[#212936] py-3 pl-3 rounded-md">
                <motion.div whileTap={{ scale: 1.1 }}>
                  <BiSearch
                    onClick={handleClick}
                    className="text-white text-lg cursor-pointer"
                  />
                </motion.div>
                <input
                  ref={ref}
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                  className="outline-none ml-2 bg-[#212936] caret-white"
                />
              </div>
              <motion.div
                whileTap={{ scale: 1.1 }}
                className="text-white group flex items-center cursor-pointer active:bg-[#212936]  focus:outline-none focus:ring focus:ring-white hover:bg-[#343b48] bg-[#212936] mt-4 py-3 pl-3 rounded-md"
              >
                <div>
                  <BiPlus className="text-xl group-hover:text-coloredText" />
                </div>
                <p className="font-Poppins text-sm ml-2 group-hover:text-coloredText">
                  New Working Thread
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div className="h-full">
          <motion.div
            transition={{ duration: 0.85, ease: "easeOut" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            className="reduced cursor-pointer bg-[#111826] w-20 h-full px-2 py-3 "
          >
            <ul className=" h-full">
              <motion.li
                className="bg-[#212936] w-[60px] h-[60px] flex items-center justify-center rounded-md drop-shadow-lg"
                whileTap={{ scale: 1.1 }}
              >
                <BiSearch
                  onClick={handleClick}
                  className="text-white text-lg cursor-pointer"
                />
              </motion.li>
              <motion.li
                className="bg-[#212936] mt-3 w-[60px] text-whiteColor h-[60px] flex items-center justify-center rounded-md drop-shadow-lg"
                whileTap={{ scale: 1.1 }}
              >
                +
              </motion.li>
              <motion.li
                className="bg-[#212936] mt-3 w-[60px] text-whiteColor h-[60px] flex items-center justify-center rounded-md drop-shadow-lg"
                whileTap={{ scale: 1.1 }}
              >
                <img src={images.CHATICON} alt="" />
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      )}

      {isActive ? (
        <motion.div
          transition={{ duration: 0.85, ease: "easeOut" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          className="bg-[#111826] cursor-pointer z-10 fixed left-[269px] text-white text-lg rounded-br-md rounded-tr-md  top-1/2  transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[18px] h-12"
        >
          <MdOutlineKeyboardArrowLeft
            onClick={handleSidebarclose}
            className="cursor-pointer"
          />
        </motion.div>
      ) : (
        <motion.div
          transition={{ duration: 0.85, ease: "easeOut" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          className="bg-[#111826] fixed z-10 left-[78px] text-white text-lg rounded-br-md rounded-tr-md  top-1/2  transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[18px] h-12"
        >
          <MdOutlineKeyboardArrowRight
            onClick={handleSidebarOpen}
            className="cursor-pointer"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sidebar;
