import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  if (
    pathname === "/signin" ||
    pathname === "/blog" ||
    pathname === "/contact" ||
    pathname === "/verification"
  )
    return null;
  return (
    <div className=" relative pt-40 md:px-16 px-5 bg-black mt-[182px] ">
      <div className="bg-coloredText w-[280px] lg:w-[80%] items-center md:w-[610px] -top-40 absolute  left-1/2 transform -translate-x-1/2  md:right-20 rounded-lg mt-20 flex flex-col px-4 py-9 md:pb-12 ">
        <div className="lg:hidden">
          <h3
            className="text-white w-full font-medium  font-FSMeridian text-[26px] md:text-5xl px-4 md:px-2 text-center
           "
          >
            <span className="text-black">
              {" "}
              Join the <br className="hidden " /> OmniGPT
            </span>{" "}
            <br /> and transform
            <br /> the way <br />
            you collaborate!
          </h3>
          <motion.button
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 1.1 }}
            className="bg-black text-whiteColor md:text-xl drop-shadow-lg cursor-pointer focus:outline-none focus:ring focus:ring-gray-200 w-full md:w-[257px] mt-6 py-5 rounded-md hover:bg-slate-900 "
          >
            Get Started Now
          </motion.button>
        </div>

        <div className=" hidden lg:flex px-16 py-6 items-center justify-between">
          <div className="text-left">
            <h3
              className="text-black font-medium  font-FSMeridian text-5xl  md:px-2 text-left
           "
            >
              Experience the OnmiGPT Difference Today!
            </h3>
            <p className=" font-GeneralSansRegular mt-3 text-2xl">
              Sign up for a 15-Day Free Trial <br /> and Transform the Way You
              Collaborate.
            </p>
          </div>

          <motion.button
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 1.1 }}
            className="bg-black font-Poppins text-whiteColor text-base text drop-shadow-lg cursor-pointer focus:outline-none focus:ring focus:ring-gray-200 w-full md:w-[257px] mt-6 py-3 rounded-md hover:bg-slate-900 "
          >
            Start your free trial
          </motion.button>
        </div>
      </div>
      <div className="lg:px-20 hidden lg:block lg:pb-32">
        <div className="flex items-center mt-40 justify-between">
          <div className="  -mt-[166px]">
            <Link to={"/"}>
              <motion.img
                transition={{ duration: 0.85, ease: "easeInOut" }}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="h-8 cursor-pointer hover:drop-shadow-sm"
                src={images.Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white text-base "
          >
            <div className="">
              <p>Lorem Ipsum</p>
              <p className=" mt-5">Lorem Ipsum</p>
              <p className=" mt-5">Lorem Ipsum</p>
            </div>
            <div className="">
              <p className=" mt-5">Lorem Ipsum</p>
              <p className=" mt-5">Lorem Ipsum</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.p
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className=" text-coloredText -mt-11 text-base tracking-[5px]"
            >
              LOREM IPSUM DOLAR
            </motion.p>
            <div className="text-white text-base">
              <div className="">
                <p className=" mt-5">Lorem Ipsum</p>
                <p className=" mt-5">Lorem Ipsum</p>
              </div>
              <div className=" ">
                <p className=" mt-5">Lorem Ipsum</p>
              </div>
            </div>
          </motion.div>
          <motion.p
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className=" -mt-44 text-white text-base"
          >
            Lorem Ipsum
          </motion.p>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="mt-40 ">
          <Link to={"/"}>
            <motion.img
              transition={{ duration: 0.85, ease: "easeInOut" }}
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="h-8 cursor-pointer hover:drop-shadow-sm"
              src={images.Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 pb-4 justify-between flex-wrap ">
          <ul className="text-white mt-8 ">
            <div className="">
              <p>Lorem Ipsum</p>
              <p className="">Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="">
              <p>Lorem Ipsum</p>
              <p className=" ">Lorem Ipsum</p>
            </div>
          </ul>
          <div>
            <motion.p
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className=" text-coloredText tracking-[5px]"
            >
              LOREM IPSUM DOLAR
            </motion.p>
            <div className="text-white mt-8">
              <div className="">
                <p>Lorem Ipsum</p>
                <p className=" ">Lorem Ipsum</p>
              </div>
              <div className=" ">
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
