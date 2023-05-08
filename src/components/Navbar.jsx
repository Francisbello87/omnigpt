import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  
  const [isMenu, setIsMenu] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileMenu = () => {
    setIsMenu(!isMenu);
    setMenuToggle(true);
  };
  const closeMenu = () => {
    setIsMenu(false);
    setMenuToggle(false);
  };
  const {pathname} = useLocation()
  if(pathname === "/signin" || pathname ===  "/verification" ) return null
  return (
    <div className="py-4 lg:py-0 bg-bgColor h-16 lg:h-20 md:h-24 drop-shadow-lg lg:drop-shadow-sm text-white w-full px-5 md:px-16 lg:px-20 fixed z-20 bottom-0 top-0 ">
      {width > 768 ? (
        // {/* Desktop Menu */}
        <div className="flex items-center w-full  justify-between">
          <div>
            <Link to={"/"}>
              <motion.img
                transition={{ duration: 0.85, ease: "easeOut" }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="h-8 cursor-pointer hover:drop-shadow-sm"
                src={images.Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <motion.ul
            transition={{ duration: 0.85, ease: "easeOut" }}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <Link to={"/blog"}>
              <motion.li
                className=" hover:text-coloredText"
                onClick={closeMenu}
                whileTap={{ scale: 0.6 }}
              >
                Blog
              </motion.li>
            </Link>
            <Link to={"/contact"}>
              <motion.li
                className="m-8 hover:text-coloredText"
                onClick={closeMenu}
                whileTap={{ scale: 0.6 }}
              >
                Contact Us
              </motion.li>
            </Link>
            <Link to={"/signin"}>
              <motion.li
                className=" hover:text-coloredText"
                onClick={closeMenu}
                whileTap={{ scale: 0.6 }}
              >
                Sign In
              </motion.li>
            </Link>
          </motion.ul>
        </div>
      ) : (
        // {/* Mobile Menu  */}
        <div>
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <motion.img
                transition={{ duration: 0.85, ease: "easeOut" }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                className="h-6"
                src={images.Logo}
                alt="Logo"
              />
            </Link>

            {menuToggle ? (
              <motion.img
                onClick={closeMenu}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="h-9 w-9"
                src={images.MenuClose}
                alt="Menu Close Button"
              />
            ) : (
              <motion.img
                className="w-11 h-11"
                onClick={mobileMenu}
                transition={{ duration: 0.85, ease: "easeOut" }}
                whileTap={{ scale: 1.1 }}
                src={images.MenuOpen}
                alt="Menu Button"
              />
            )}
          </div>
          {isMenu && (
            <motion.ul
             
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className=" bg-bgColor text-whiteColor w-full
          h-568 flex flex-col 
          items-center justify-center font-GeneralSans top-15 font-medium text-2xl right-0  absolute"
            >
              <Link to={"/blog"}>
                <motion.li onClick={closeMenu} whileTap={{ scale: 0.6 }}>
                  Blog
                </motion.li>
              </Link>
              <Link to={"/contact"}>
                <motion.li
                  className="m-8"
                  onClick={closeMenu}
                  whileTap={{ scale: 0.6 }}
                >
                  Contact Us
                </motion.li>
              </Link>
              <Link to={"/signin"}>
                <motion.li onClick={closeMenu} whileTap={{ scale: 0.6 }}>
                  Sign In
                </motion.li>
              </Link>
            </motion.ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
