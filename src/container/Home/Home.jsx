import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

import InputHints from "react-input-hints";
import Testimonial from "../Testimonial/Testimonial";
import {BsCheckCircleFill} from "react-icons/bs"
import Integrations from "../Integrations/Integrations";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" w-full md:w-full text-white px-5 md:px-16 mt-20 lg:mt-28 lg:px-20 ">
      {width > 1024 ? (
        // Desktop
        <div className="mt-[132px]">
          <div className="flex justify-between items-center gap-30 gap-16">
            <div className=" relative flex-1 max-w-[635px]">
              <motion.h1
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-[70px] font-FSMeridian -mt-2"
              >
                Seamless Communication with OmniGPT
              </motion.h1>
              <motion.img
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="w-[915px] absolute top-[180px] -z-10 -left-4"
                src={images.graphic}
              />
              <h3 className="text-[32px]">Powered by Chat GPT-4</h3>
              <p className="text-xl text-gray-300 font-GeneralSansRegular max-w-[580px]">
                Experience the power of AI language models with OmniGPT. Our
                chat platform provides seamless communication across multiple
                channels.
              </p>
              <p className="mt-4">
                Try for free! 15-day trial, no credit card required.
              </p>
              <motion.button
                whileTap={{ scale: 1.2 }}
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                className="px-8 py-3 bg-coloredText font-Poppins font-semibold mt-5 rounded-md"
              >
                Start your free trial
              </motion.button>
            </div>
            <div className="hero-image flex flex-col gap-8 justify-between">
              <div className="level-one flex items-center flex-wrap justify-between">
                <div>
                  <motion.img
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="w-[320px] absolute top-[52px]"
                    src={images.HeroImg}
                    alt="Hero Image"
                  />
                  <img
                    className="w-[333px] h-[107px]"
                    src={images.YellowBg}
                    alt=""
                  />
                </div>
                <motion.div className="flex items-center  bg-purpleColor rounded-full h-[107px] drop-shadow-md w-[107px] justify-center">
                  <motion.img
                    whileInView={{
                      scale: [1, 1, 1, 1, 1],
                      rotate: [0, 30, 60, 240, 360],
                    }}
                    className="h-18 w-18 drop-shadow-lg"
                    transition={{ duration: 1.3 }}
                    src={images.Arrow}
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="level-two flex flex-wrap items-center justify-between gap-12">
                <motion.div className="flex items-center bg-purpleColor rounded-full h-[107px] drop-shadow-md w-[107px] justify-center">
                  <motion.img
                    whileInView={{
                      scale: [1, 1, 1, 1, 1],
                      rotate: [360, 240, 60, 30, 0],
                    }}
                    className="h-18 w-18 drop-shadow-lg"
                    transition={{ duration: 1.3 }}
                    src={images.rightArrow}
                    alt=""
                  />
                </motion.div>
                <div className="relative flex items-center justify-center">
                  <motion.img src={images.whiteRect} alt="white rectangle" />
                  <motion.img
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1.2, ease: "easeIn" }}
                    src={images.clap}
                    alt="clapping people"
                    className="absolute -top-8"
                  />
                </div>
              </div>
              <div className="level three flex-wrap flex flex-col gap-9 ">
                <div className="relative">
                  <img src={images.purpleRect} alt="" />
                  <motion.p
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.2, ease: "easeIn" }}
                    className="w-[253px] absolute top-4 right-8 font-GeneralSansRegular"
                  >
                    <span className="boldText"> @OmniGPT </span> Can you give us
                    an update on the latest project status?
                  </motion.p>
                </div>
                <div className="flex relative items-center justify-between">
                  <img src={images.greenRectangle} alt="green rectangle" />
                  <img
                    className=""
                    src={images.yellowRectangle}
                    alt="green rectangle"
                  />
                  <motion.img
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    src={images.Andrea}
                    className="absolute -top-[186px]"
                    alt="Andrea peexels image"
                  />
                </div>
              </div>
            </div>
          </div>
          <motion.div className="bg-black relative mt-32 pt-36 flex  items-center justify-center rounded-md">
            <img className="h-[479px]" src={images.desktopIhpne} alt="Iphone" />
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex absolute bottom-12 drop-shadow-xl justify-between items-center rounded-lg bg-white w-[50%]"
            >
              <motion.div className="flex items-center justify-evenly">
                <div className="bg-white cursor-pointer drop-shadow-lg  flex pl-5 py-4 rounded-lg ">
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="pr-5 h-5"
                    src={images.exportBtn}
                    alt=""
                  />
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="pr-5 w- h-5"
                    src={images.MicBtn}
                    alt=""
                  />
                </div>
                <InputHints
                  className="w-[450px] text-textColor p-2 outline-none bg-inputColor"
                  placeholders={[
                    "Can you find me a restaurant nearby?",
                    "What is the price of Bitcoin today?",
                  ]}
                />
                {/* <Typewriter
                  className="w-[430px]  text-textColor p-2 outline-none bg-inputColor"
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Can you help me find a restaurants nearby?")

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Can you help me find a library nearby?")
                      .start();
                  }}
                /> */}

                <div className="bg-white cursor-pointer drop-shadow-lg outline-none flex pl-5 py-4 rounded-lg ">
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="pr-5 h-5"
                    src={images.sendBtn}
                    alt=""
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="mt-32 flex gap-9 items-center justify-center">
            <div className="flex flex-1 relative max-w-[632px] items-center justify-center mt-14">
              <motion.img
                className="w-[321px] h-[655px]"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                src={images.Iphone}
                alt="iphone 14"
              />
              <div className="bg-white absolute  left-12 top-12 flex items-center justify-center  rounded-full w-[71px] h-[71px] md:w-[119px] md:h-[119px] md:left-20">
                <motion.img
                  whileInView={{
                    opacity: [0, 1],
                    scale: [1, 1.1, 1.2, 1.1, 1],
                    // rotate: [0, 30, 60, 240, 360],
                  }}
                  className="md:w-14 md:h-14"
                  transition={{ duration: 2, ease: "easeInOut" }}
                  src={images.facebook}
                  alt="facebook messenger icon"
                />
              </div>
              <div className="bg-white absolute right-10 bottom-12 flex items-center justify-center  rounded-full w-[71px] h-[71px] md:w-[119px] md:h-[119px] md:right-20">
                <motion.img
                  whileInView={{
                    opacity: [0, 1],
                    scale: [1, 0.8, 1.1, 1.2, 1],
                    rotate: [360, 240, 60, 30, 0],
                  }}
                  className="md:w-20 md:h-20"
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                  src={images.whatsapp}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  className="absolute md:w-[108px] md:h-[108px] md:left-24 left-12 bottom-24 -z-10 flex items-center justify-center w-[71px] h-[71px]"
                  src={images.greenRect}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  className="absolute md:w-[108px] md:h-[108px] md:right-24 right-12 top-24 -z-10 flex items-center justify-center w-[71px] h-[71px]"
                  src={images.yellowRect}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1">
              <motion.h2
                transition={{ duration: 0.8 }}
                className="font-medium font-FSMeridian mb-5 text-4xl md:text-6xl"
              >
                The{" "}
                <motion.span
                  transition={{ duration: 1.3 }}
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                >
                  All-in-One
                </motion.span>{" "}
                Solution for Conversational AI
              </motion.h2>
              <div className="bg-white mb-4 md:mb-5 rounded-md text-black flex items-center px-5 py-3 md:py-8 drop-shadow-md">
                <div>
                  <h5 className="text-xl text-left mb-4 font-GeneralSans font-medium">
                    Seamless Collaboration
                  </h5>
                  <p className="text-gray-600 text-lg lead font-GeneralSans">
                    You can easily collaborate with friends and colleagues on
                    projects, whether it's for work or personal use.
                  </p>
                </div>
                <img
                  className="w-24 h-24 hidden"
                  src={images.Collab}
                  alt="collaboration"
                />
              </div>
              <motion.div
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: [0, 1] }}
                className=" border-b-2 border-gray-300 text-3xl text-white  px-5 py-4"
              >
                <motion.p
                  transition={{ duration: 1.2 }}
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  className="text-white text-lg"
                >
                  Multi-Channel Support
                </motion.p>
              </motion.div>
              <motion.div
                transition={{ duration: 1.4 }}
                whileInView={{ opacity: [0, 1] }}
                className="border-b-2 border-gray-300 text-3xl text-white  px-5 py-4"
              >
                <motion.p
                  transition={{ duration: 1.4 }}
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                  className=" text-lg"
                >
                  AI-Powered Assistance
                </motion.p>
              </motion.div>
              <motion.div
                transition={{ duration: 1.6 }}
                whileInView={{ opacity: [0, 1] }}
                className="border-b-2 border-gray-300 text-3xl text-white  px-5 py-4"
              >
                <motion.p
                  transition={{ duration: 1.6 }}
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  className="text-white text-lg"
                >
                  Easy to Use
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="mt-32 flex flex-col gap-9 items-center justify-center">
            <motion.h2
              transition={{ duration: 0.8 }}
              className="font-medium text-center font-FSMeridian text-6xl max-w-[516px]"
            >
              <motion.span
                transition={{ duration: 1.3 }}
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
              >
                Accessible
              </motion.span>{" "}
              pricing for all users
            </motion.h2>
            <div className="bg-gray-700 w-[391px] p-8 rounded-lg drop-shadow-md">
              <div className="flex items-center">
                <p className=" bg-gray-800 font-GeneralSansRegular mr-2  text-slate-300 text-xs flex items-center rounded-sm p-1 justify-center">
                  Most popular
                </p>
                <p className="  bg-yellow-300 font-GeneralSansRegular mr-2 from-neutral-300 text-xs flex items-center rounded-sm p-1 justify-center text-yellow-700">
                  TEST MODE
                </p>
              </div>
              <div className="mt-3 mb-6">
                <h4 className="mb-2 text-xl">Standard</h4>
                <p className="font-poppins text-sm text-slate-400">
                  Upgrade your productivity with AI- <br /> powered technology
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-5xl font-semibold font-Poppins mr-1">$7</h3>
                <div className="flex flex-col font-Poppins  text-gray-400 text-[16px]">
                  <p>per</p>
                  <p>month</p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="w-full mt-7 bg-green-400 p-2 font-Poppins text-black rounded-md hover:bg-green-700 hover:text-slate-200 drop-shadow-lg"
              >
                Start trial
              </motion.button>
              <div className="text-gray-200 mt-3 text-sm">
                <p className="text-sm font-Poppins">This includes:</p>
                <div className="mt-2 font-Poppins  flex ">
                  <BsCheckCircleFill className="mr-3 mt-1"/>
                  <p>Use OmniGPT from your <br/> WhatsApp</p>
                </div>
                <div className="mt-2 flex font-Poppins  ">
                  <BsCheckCircleFill className="mr-3 mt-1"/>
                  <p>Transcribe speech into text</p>
                </div>
                <div className="mt-2 flex font-Poppins  ">
                  <BsCheckCircleFill className="mr-3 mt-1"/>
                  <p>Download your chat <br/> conversations</p>
                </div>
                <div className="mt-2 flex font-Poppins ">
                  <BsCheckCircleFill className="mr-3 mt-1"/>
                  <p>Upload documents to get <br/> better insights</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        // {/* Mobile & Tablet */}
        <div>
          {/* Hero Section */}
          <div>
            <div className="relative mb-8 flex items-center ">
              <div className="">
                <motion.img
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8 }}
                  className="w-52 md:w-[455px] -ml-2 -mt-1"
                  src={images.HeroImg}
                  alt="Hero Image"
                />
                <img
                  className="h-14 w-52 md:w-[442px] md:h-[141px] mt-11 absolute md:top-24 top-4 -left-2 -z-10"
                  src={images.YellowBg}
                  alt=""
                />
              </div>
              <motion.div className="flex items-center justify-center">
                <motion.img
                  whileInView={{
                    scale: [1, 1, 1, 1, 1],
                    rotate: [0, 30, 60, 240, 360],
                  }}
                  className=" absolute top-14 md:top-36 right-2  h-[60px] md:h-[141px] md:w-[142px]"
                  transition={{ duration: 1.3 }}
                  src={images.heroCircle}
                  alt=""
                />
              </motion.div>
            </div>
            <div className="relative">
              <motion.h1
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-FSMeridian font-medium leading-normal md:text-[80px] text-4xl"
              >
                Bring the power of AI to your conversations
              </motion.h1>
              <img
                className="absolute md:w-[555.55px] md:top-64 top-28 -z-10"
                src={images.vector}
                alt=""
              />
              <motion.h3
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="mt-4 text-3xl md:text-[32px]"
              >
                Work Faster, Smarter, and Better Together
              </motion.h3>
              <p className=" font-GeneralSansRegular md:w-[539px] text-gray-300 text-base md:text-xl md:mt-7 mt-2">
                Experience the power of AI language models with OmniGPT. Our
                chat platform provides seamless communication across multiple
                channels.
              </p>
              <h5 className="mt-4 mb-5 text-xl">
                Try the OmniGPT for free. 15-day trial, no credit card required.
              </h5>
              <motion.button
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileTap={{ scale: 1.1 }}
                className="w-full md:w-60 mt-7 font-Poppins text-xl drop-shadow-lg cursor-pointer focus:outline-none focus:ring focus:ring-violet-300  hover:bg-emerald-600 py-4 mb-6 rounded-md bg-coloredText"
              >
                Start your free trial
              </motion.button>
            </div>
          </div>
          {/* Hero Section Ends */}
          {/* Mid Section Begins */}
          <div className="mt-10 ">
            <div>
              <motion.h2
                transition={{ duration: 0.8 }}
                className="font-medium font-FSMeridian mb-5 text-4xl md:text-6xl"
              >
                The{" "}
                <motion.span
                  transition={{ duration: 1.3 }}
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                >
                  All-in-One
                </motion.span>{" "}
                Solution for Conversational AI
              </motion.h2>
              <div className="bg-white mb-4 md:mb-5 rounded-md text-black flex items-center px-5 py-3 md:py-8 drop-shadow-md">
                <div>
                  <h5 className="text-xl text-left mb-4 font-GeneralSans font-medium">
                    Seamless Collaboration
                  </h5>
                  <p className="text-gray-600 text-lg lead font-GeneralSans">
                    You can easily collaborate with friends and colleagues on
                    projects, whether it's for work or personal use.
                  </p>
                </div>
                <img
                  className="w-24 h-24 hidden md:block"
                  src={images.Collab}
                  alt="collaboration"
                />
              </div>
              <motion.div
                transition={{ duration: 0.8 }}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                className="bg-gray-500 font-GeneralSans font-normal text-white rounded-md px-5 py-4"
              >
                <p className="text-white text-lg">Multi-Channel Support</p>
              </motion.div>
              <motion.div
                transition={{ duration: 1 }}
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                className="bg-gray-500 font-GeneralSans mt-3 mb-3 font-normal text-white rounded-md px-5 py-4"
              >
                <p className=" text-lg">AI-Powered Assistance</p>
              </motion.div>
              <motion.div
                transition={{ duration: 1.2 }}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                className="bg-gray-500 drop-shadow-lg font-GeneralSans font-normal text-white rounded-md px-5 py-4"
              >
                <p className="text-white text-lg">Easy to Use</p>
              </motion.div>
            </div>
          </div>
          {/* Mid Section Ends */}
          <div className="flex relative items-center justify-center mt-14">
            <motion.img
              className="md:w-80 md:h-650"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              src={images.Iphone}
              alt="iphone 14"
            />
            <div className="bg-white absolute  left-12 top-12 flex items-center justify-center  rounded-full w-[71px] h-[71px] md:w-[119px] md:h-[119px] md:left-20">
              <motion.img
                whileInView={{
                  opacity: [0, 1],
                  scale: [1, 1.1, 1.2, 1.1, 1],
                  // rotate: [0, 30, 60, 240, 360],
                }}
                className="md:w-14 md:h-14"
                transition={{ duration: 2, ease: "easeInOut" }}
                src={images.facebook}
                alt="facebook messenger icon"
              />
            </div>
            <div className="bg-white absolute right-10 bottom-12 flex items-center justify-center  rounded-full w-[71px] h-[71px] md:w-[119px] md:h-[119px] md:right-20">
              <motion.img
                whileInView={{
                  opacity: [0, 1],
                  scale: [1, 0.8, 1.1, 1.2, 1],
                  rotate: [360, 240, 60, 30, 0],
                }}
                className="md:w-20 md:h-20"
                transition={{ duration: 2.4, ease: "easeInOut" }}
                src={images.whatsapp}
                alt=""
              />
            </div>
            <div>
              <motion.img
                className="absolute md:w-[108px] md:h-[108px] md:left-24 left-12 bottom-24 -z-10 flex items-center justify-center w-[71px] h-[71px]"
                src={images.greenRect}
                alt=""
              />
            </div>
            <div>
              <motion.img
                className="absolute md:w-[108px] md:h-[108px] md:right-24 right-12 top-24 -z-10 flex items-center justify-center w-[71px] h-[71px]"
                src={images.yellowRect}
                alt=""
              />
            </div>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Home;
