import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { FaRegEnvelope } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "firebase/auth";
import { useEffect } from "react";

// import { app } from "../../firebase";
// import { actionType } from "../../context/reducer";
// import { useStateValue } from "../../context/StateProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { user, logout, googleSignIn, googleSignInMobile } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const [users, loading, error] = useAuthState(auth);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  const [infoMsg, setInfoMsg] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleSignInMobile = async () => {
    try {
      await googleSignInMobile();
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = () => {
    navigate("/verification");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    let email = localStorage.getItem("email");
    if (user != null) {
      navigate("/verification");
    }
  }, [user]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   } else {
  //     if (isSignInWithEmailLink(auth, window.location.href)) {
  //       let email = localStorage.getItem("email");
  //       if (!email) {
  //         email = window.prompt("Please provide your email");
  //       }
  //       signInWithEmailLink(
  //         auth,
  //         localStorage.getItem("email"),
  //         window.location.href
  //       )
  //         .then((result) => {
  //           localStorage.removeItem("email");
  //           navigate("/");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } else {
  //       console.log("Sho da mo");
  //     }
  //   }
  // }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:3000/verification",
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem("email", email);
        setLoginLoading(false);
        setLoginError("");
        setInfoMsg("We have sent you an email with a link to sign in.");
      })
      .catch((err) => {
        setLoginLoading(false);
        setLoginError(err.message);
      });
  };

  return (
    <div className="w-full sign-in mt-0 flex items-center justify-center">
      <div className="bg-white w-[100%] lg:w-[45%] drop-shadow-lg shadow-lg flex flex-col items-center justify-center rounded-md p-12 shadow-shadowColor">
        {user?.displayName ? (
          <div className="flex font-Poppins items-center justify-center flex-col">
            <h3 className=" text-2xl font-semibold ">Welcome to OmniGPT</h3>
            <p className="mt-3 text-sm font-normal">
              We sent an email to{" "}
              <span className="font-semibold text-black">{user?.email}</span>
            </p>
            <p className="text-sm font-normal">
              Click the button in the email to continue on your way
            </p>
            <button
              onClick={handleVerify}
              className="bg-coloredText text-sm font-semibold text-whiteColor rounded-md px-6 py-3 mt-4 mb-4 hover:bg-green-600 hover:drop-shadow-lg "
            >
              Go to verify email address
            </button>
            <p className="text-xs font-normal text-center">
              Please note that the link will expire after one hour for security
              purposes.
            </p>
            <p className="text-xs font-normal text-center mt-2">
              Can’t find it?{" "}
              <a href="" className=" hover:underline text-purple-400">
                Resend Email
              </a>{" "}
            </p>
            <img
              className="text-black mt-6 "
              src={images.signInLogo}
              alt="OmniGPT Logo"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img className="text-black " src={images.signInLogo} alt="" />
            <form onSubmit={handleSignIn} className="flex flex-col ">
              <label
                className="text-center mb-4 mt-4 font-Poppins"
                htmlFor="email"
              >
                Enter your email to start using
              </label>
              <div className="flex items-center py-2 border-2 px-2 rounded-md  font-Poppins">
                <FaRegEnvelope className="mr-2 text-gray-300" />
                <input
                  className="outline-none w-[100%] lg:w-[304px] focus:caret-green-500"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </div>
              <motion.button
                className="bg-coloredText font-Poppins text-sm hover:bg-gradient-to-r from-green-400 via-green-500 to-green-300 hover:drop-shadow-lg mt-4 mb-4 py-2 rounded-md text-white"
                whileTap={{ scale: 1.1 }}
                type="submit"
                // onClick={handleClick}
              >
                {loginLoading ? (
                  <span className="text-white">Signing you in ...</span>
                ) : (
                  <span className="text-white">Sign in</span>
                )}
              </motion.button>
              <div className="text-coloredText">{infoMsg}</div>

              <div className="flex items-center mb-4 font-Poppins text-xs justify-between">
                <hr className="w-[30%]" />
                <p className="text-gray-400">or connect with</p>
                <hr className="w-[30%]" />
              </div>
              <motion.div className="flex items-center justify-center cursor-pointer">
                {width > 768 ? (
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    onClick={handleGoogleSignIn}
                    className="w-[120px] h-12"
                    src={images.signBtn}
                    alt="Google Sign in Button"
                  />
                ) : (
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    onClick={handleGoogleSignInMobile}
                    className="w-[120px] h-12"
                    src={images.signBtn}
                    alt="Google Sign in Button"
                  />
                )}
              </motion.div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
