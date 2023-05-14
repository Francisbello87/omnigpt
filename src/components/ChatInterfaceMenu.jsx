import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { images } from "../constants";
import { UserAuth } from "../context/AuthContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSearch, BiPlus } from "react-icons/bi";


const ChatInterfaceMenu = () => {
  const { user, logOut, googleSignIn } = UserAuth();
  const [account, setAccount] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  const handleAccount = () => {
    setAccount(!account);
  };
  const handleAccountClose = () => {
    setAccount(false);
  };
  const handleSignOut = async () => {
    try {
      await logOut();
      setAccount(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAccountBtn = () => {
    setAccount(false);
  };

  const variants = {
    start: { x: [-100, 0], opacity: [0, 1] },
    transition: { duration: 0.5 },
    end: { opacity: [0, 1] },
    transition: { duration: 0.5 },
  };
  const mobileMenu = () => {
    setIsMenu(!isMenu);
    setMenuToggle(true);
    setIsMobileMenu(true);
  };
  const closeMenu = () => {
    setIsMenu(false);
    setMenuToggle(false);
    setIsMobileMenu(!isMobileMenu);
    setAccount(false);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-coloredText relative bg-bgColor h-[70px]">
      {width > 768 ? (
        <div className="flex fixed items-center drop-shadow-md shadow-sm shadow-slate-200 justify-between w-full lg:h-[70px] bg-white px-5  ">
          <div>
            <img src={images.ChatLogo} alt="OmniGPT Logo" className="" />
          </div>
          <div className="flex items-center justify-between">
            <button className="flex items-center bg-chatColor bg-opacity-30 px-4 py-2 border-solid text-chatColor rounded-md hover:bg-opacity-40 justify-center">
              <img
                src={images.ChatWhatsApp}
                alt="WhatsApp icon"
                className="mr-1"
              />{" "}
              Connect to WhatsApp
            </button>
            <div className="flex items-center flex-1 ml-3">
              <div>
                <img
                  className="rounded-full w-[40px] h-[40px]"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <p className="font-Poppins text-sm ml-[10px]">
                {user?.displayName}
              </p>
              {!account ? (
                <motion.div
                  onClick={handleAccount}
                  whileTap={{ scale: 1.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <RiArrowDropDownLine className="text-2xl ml-3 cursor-pointer" />
                </motion.div>
              ) : (
                <motion.div
                  onClick={handleAccountClose}
                  whileTap={{ scale: 1.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <RiArrowDropUpLine className="text-2xl ml-3 cursor-pointer" />
                </motion.div>
              )}
            </div>
          </div>
          {account && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="bg-white w-[146px] h-[80px] font-Poppins text-sm  absolute right-5 top-[60px] px-3 py-4 cursor-pointer drop-shadow-md rounded-md"
            >
              <motion.p
                whileTap={{ scale: 1.1 }}
                onClick={handleAccountBtn}
                className=" font-semibold text-black mb-2 hover:drop-shadow-lg   hover:text-coloredText"
              >
                Account Settings
              </motion.p>
              <motion.p
                whileTap={{ scale: 1.1 }}
                onClick={handleSignOut}
                className=" font-normal text-gray-400 hover:text-gray-500 hover:drop-shadow-lg   "
              >
                Sign Out
              </motion.p>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between px-3 py-3 text-gray-200">
          <div className="rounded-full w-12 h-12 flex items-center justify-center ">
            {menuToggle ? (
              <motion.img
                onClick={closeMenu}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className=" h-5 w-5 hidden "
                src={images.MenuClose}
                alt="Menu Close Button"
              />
            ) : (
              <AiOutlineMenu
                className="text-2xl text-gray-300"
                onClick={mobileMenu}
              />
            )}
          </div>
          <p className="font-Poppins font-normal">New chat</p>
          <motion.button whileTap={{scale: 1.2}} className="font-Poppins">+</motion.button>
        </div>
      )}
      {isMobileMenu && (
        <motion.div
          variants={variants}
          animate={isMobileMenu ? "start" : "end"}
          className={
            isMobileMenu ? "mainStyle open-menu" : "mainStyle close-menu"
          }
        >
          <div>
            <motion.button
            whileTap={{scale: 1.1}}
              onClick={closeMenu}
              className="absolute bg-bgColor border-slate-200 cursor-pointer focus:outline-none focus:ring focus:ring-gray-200 p-1 text-2xl text-gray-300 top-0 -right-8"
            >
              <AiOutlineClose />
            </motion.button>
          </div>
          <div className="bg-bgColor w-full h-[80%] overflow-scroll p-3">
          <motion.div
              // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              // transition={{ duration: 0.8, ease: "easeInOut" }}
              className=""
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
          </div>
          <div className="bg-bgColor border-t w-full h-[20%] py-4 px-5 relative flex flex-col">
            <button className="flex items-center bg-chatColor bg-opacity-30 px-3 py-2 border-solid text-chatColor rounded-md hover:bg-opacity-40 justify-center">
              <img
                src={images.ChatWhatsApp}
                alt="WhatsApp icon"
                className="mr-1"
              />{" "}
              Connect to WhatsApp
            </button>
            <div
              onClick={handleAccount}
              className="flex items-center px-2 py-2 mt-3 cursor-pointer focus:outline focus:ring focus:ring-gray-200  bg-gray-600 text-xs h-8 rounded w-[100%] flex-1 text-white"
            >
              <div>
                <img
                  className="rounded-full w-[30px] h-[30px]"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-Poppins text-sm ml-[10px] mr-20">
                  {user?.displayName}
                </p>
                <p className="text-gray-300">...</p>
              </div>

              {account ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="bg-white w-full h-[80px] font-Poppins text-sm  absolute left-0 -top-20 px-3 py-4 cursor-pointer drop-shadow-md rounded-md rounded-bl-none rounded-br-none"
                >
                  <motion.p
                    whileTap={{ scale: 1.1 }}
                    onClick={handleAccountBtn}
                    className=" font-semibold text-black mb-2 hover:drop-shadow-lg   hover:text-coloredText"
                  >
                    Account Settings
                  </motion.p>
                  <motion.p
                    whileTap={{ scale: 1.1 }}
                    onClick={handleSignOut}
                    className=" font-normal text-gray-400 hover:text-gray-500 hover:drop-shadow-lg   "
                  >
                    Sign Out
                  </motion.p>
                </motion.div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </motion.div>
      )}
      
    </div>
  );
};

export default ChatInterfaceMenu;
