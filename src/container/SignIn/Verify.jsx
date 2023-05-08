import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { UserAuth } from "../../context/AuthContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BiSearch, BiPlus } from "react-icons/bi";
import InputHints from "react-input-hints";

const Verify = () => {
  const [account, setAccount] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you today?",
    },
    {
      user: "me",
      message: "I wan use OmniGPT",
    },
  ]);

  const { user, logOut, googleSignIn } = UserAuth();
  const ref = useRef(null);

  const handleAccount = () => {
    setAccount(true);
  };

  const handleClick = () => {
    ref.current.focus();
  };
  const handleAccountClose = () => {
    setAccount(false);
  };
  const handleAccountBtn = () => {
    setAccount(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    // console.log('submit');
    setInput("");
  };
  const handleSignOut = async () => {
    try {
      await logOut();
      setAccount(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStartOmni = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="w-full verify ">
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
      <div className="flex">
        <div className="sidebar  fixed z-10  bg-[#111826] h-[90vh] w-[256px] px-2 py-3 mt-[71px]">
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
        </div>
        <div className="chatInterface bg-white flex-1 ml-[256px] w-[1184px] h-[50%] pb-16 mt-[71px] ">
          <div className=" h-[50%]">
            <div className="chat-log text-left  ">
              <div className="chat-message omnigpt ">
                <div className="chat-message-center max-w-[640px] ml-auto mr-auto py-10 flex">
                  <div className="avatar  w-10 h-10">
                    <img src={images.GPT} alt="ominiGPT Logo"/>
                  </div>
                  <div className="message px-10">I am an AI</div>
                </div>
              </div>
              <div className="chat-message ">
                <div className="chat-message-center max-w-[640px] ml-auto mr-auto py-10  flex">
                  <div className="avatar bg-red-400 rounded-full w-10 h-10">
                    Me
                  </div>
                  <div className="message px-10">Hello World</div>
                </div>
              </div>
              {/* <div className="chat-message-center flex max-w-[766px] ml-auto mr-auto">
                  {chatLog.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                  ))}
                </div> */}

              {/* <div className="chat-message  border-b-2 py-6 flex ">
                <div className="chat-message-center flex max-w-[766px] ml-auto mr-auto">
                  <div className="avatar w-8 h-8 mr-3">
                    <img src={user?.photoURL} alt="User profile pic" />
                  </div>
                  <div className="message ">
                    <p className="max-w-[700px] font-Poppins text-base">
                      Welcome to OmniGPT! <br /> <br /> We're excited to have
                      you here. Start by typing anything in the chat box and
                      let's get the conversation started. Our AI-powered
                      platform is here to help you communicate effortlessly and
                      effectively across multiple channels. Don't hesitate to
                      reach out if you have any questions or feedback. <br />{" "}
                      <br /> Also, don't forget that you can connect to your
                      WhatsApp number anytime by clicking on the "Connect to
                      WhatsApp" button in the top navigation bar.
                      <br /> <br /> Happy chatting!
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className=" text-white h-[10vh]">
            <div className=" fixed flex items-center justify-center bottom-0 h-[114px] w-[84.7%]">
              <div className="bg-white drop-shadow-lg w-[70%] flex  items-center  justify-between h-[72px] rounded-sm">
                <div className="bg-white cursor-pointer  flex items-center pl-5 py-4 rounded-lg ">
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
                <form className="w-[100%]" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-[100%] bg-[#F7F7F8] text-black py-2 outline-none placeholder-[#8F9FB2] font-Poppins text-sm caret-coloredText"
                    placeholder="Send a message..."
                  />
                </form>

                <div className="bg-white cursor-pointer items-center  outline-none flex pl-5  rounded-lg ">
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="pr-5 h-5"
                    src={images.sendBtn}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !isActive
            ? "absolute top-0   w-full h-full flex  justify-center items-center bg-slate-600/30 backdrop-brightness-75 backdrop-blur-sm"
            : " hidden "
        }
      >
        <div className="bg-white max-w-[592px] py-12 px-6 rounded-md flex flex-col items-center justify-center">
          <img
            className="w-20 h-[70.87px]"
            src={images.Envelope}
            alt="Envelope"
          />
          <div className="mt-6 font-Poppins text-center">
            <h4 className="font-semibold">
              Your email has already been confirmed
            </h4>
            <p className="mt-3 text-sm">
              You can now log in and enjoy OmniGPT.
            </p>
            <p className=" mt-4 mb-4 text-sm">
              For a better experience, you can connect to WhatsApp and chat with
              OmniGPT on your WhatsApp number for seamless communication.
            </p>

            <p className="text-sm">
              If you prefer to connect later, you can do so in the settings
              page.
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={handleStartOmni}
            className={
              "font-Poppins text-sm mt-7 hover:drop-shadow-lg bg-[#8F9FB2] bg-opacity-50 py-3 px-5 w-[60%] rounded-md"
            }
          >
            Start using OmniGPT
          </motion.button>
          <motion.button
            whileTap={{ scale: 1.1 }}
            className="flex items-center justify-center hover:drop-shadow-lg font-Poppins text-sm mt-7 text-white bg-coloredText  py-3 px-5 w-[60%] rounded-md"
          >
            <img
              src={images.WhatsappBtnVerify}
              alt="WhatsApp icon"
              className="mr-1 text-white"
            />{" "}
            Connect to WhatsApp
          </motion.button>
        </div>
      </div>
    </div>
  );
};
const ChatMessage = ({ message }) => {
  return (
    <div
      className={`chat-message ${
        message.user === "gpt" && "omnigpt"
      }  border-b-2 py-6 flex "`}
    >
      <div className="chat-message-center flex max-w-[766px] ml-auto mr-auto">
        <div
          className={`avatar ${
            message.user === "gpt" && "omnigpt"
          } "w-8 h-8 mr-3"`}
        >
          <img
            src={message.user === "gpt" && images.GPT}
            alt="User profile pic"
          />
        </div>
        <div className="message ">
          <p className="max-w-[700px] font-Poppins text-base">
            {message.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
