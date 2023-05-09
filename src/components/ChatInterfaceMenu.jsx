import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../constants";
import { UserAuth } from "../context/AuthContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const ChatInterfaceMenu = () => {
  const { user, logOut, googleSignIn } = UserAuth();
  const [account, setAccount] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleAccount = () => {
    setAccount(true);
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

  const mobileMenu = () => {
    setIsMenu(!isMenu);
    setMenuToggle(true);
  };
  const closeMenu = () => {
    setIsMenu(false);
    setMenuToggle(false);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-coloredText bg-bgColor h-[70px]">
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
        <div className="flex items-center justify-between px-3 text-gray-200">
          <div className="rounded-full w-12 h-12  flex items-center justify-center bg-coloredText">
            {menuToggle ? (
              <motion.img
                onClick={closeMenu}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className=" h-5 w-5 "
                src={images.MenuClose}
                alt="Menu Close Button"
              />
            ) : (
              <motion.img
                className="h-8 w-8"
                onClick={mobileMenu}
                transition={{ duration: 0.85, ease: "easeOut" }}
                whileTap={{ scale: 1.1 }}
                src={images.MenuOpen}
                alt="Menu Button"
              />
            )}
          </div>
          <p className="font-Poppins">New chat</p>
          <p className="font-Poppins">+</p>
        </div>
      )}
    </div>
  );
};

export default ChatInterfaceMenu;
