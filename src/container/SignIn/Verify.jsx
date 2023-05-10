import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { UserAuth } from "../../context/AuthContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BiSearch, BiPlus } from "react-icons/bi";
import InputHints from "react-input-hints";
import { ChatInterfaceMenu } from "../../components";
import Sidebar from "./Sidebar";

const Verify = () => {
  const [account, setAccount] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you today?",
    },
    {
      user: "me",
      message: "How can I help you today?",
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
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    // console.log('submit');
    setInput("");
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join(""),
      }),
    });
    const data = await response.json();
    setChatLog([...chatLog, { user: "gpt", message: `${data.message}` }]);
    console.log(data.message);
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
      <ChatInterfaceMenu />
      <div className="flex h-[90%]">
        <Sidebar />
        <div className="chatInterface bg-white flex-1 w[70%] lg:w-[1184px] pb-16  ">
          <div className=" h-[80vh]  overflow-scroll">
            <div className="chat-log text-left max-w-[766px]  ">
              {chatLog.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
            </div>
          </div>
          <div className=" text-white h-[10vh] py-6">
            {width > 768 ? (
              <div className=" absolute desktop flex items-center justify-center left-56 bottom-0 h-[114px] w-[80.7%]">
                <div className="bg-white ml  drop-shadow-lg w-[70%] flex  items-center  justify-between h-[72px] rounded-sm">
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
            ) : (
              <div className="mobile flex items-center">
                <div className="bg-white cursor-pointer flex items-center pl-5 py-2">
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
                <form className="w-[70%]" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-[100%] bg-[#F7F7F8] text-black py-2 pl-1 outline-none placeholder-[#8F9FB2] font-Poppins text-sm caret-coloredText"
                    placeholder="Send a message..."
                  />
                </form>

                <button onClick={handleSubmit} className="bg-white cursor-pointer items-center rounded-br-none rounded-tr-none  py-2 outline-none flex pl-5 ">
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="pr-5 h-5"
                    src={images.sendBtn}
                    alt=""
                  />
                </button>
              </div>
            )}
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
  const { user, logOut, googleSignIn } = UserAuth();
  return (
    <div
      className={`chat-message ${
        message.user === "gpt" && "omnigpt"
      }  border-b-2 py-6 flex "`}
    >
      <div className="chat-message-center flex justify-between lg:max-w-[766px] ml-auto mr-auto">
        <div
          className={`avatar ${
            message.user === "gpt" && "omnigpt"
          } "w-8 h-8 mr-3"`}
        >
          <img
            src={message.user === "gpt" ? images.GPT : `${user?.photoURL}`}
            alt="User profile pic"
            className="user-profile-img"
          />
        </div>
        <div className="message max-w-[90%] flex-1 ">
          <p className="lg:max-w-[700px] font-Poppins text-base">
            {message.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
