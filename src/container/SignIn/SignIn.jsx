import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { FaRegEnvelope } from "react-icons/fa";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase.config";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  // const firebaseAuth = getAuth(app);
  // const provider = new GoogleAuthProvider();
  // const [{user}, dispatch] = useStateValue();
  // // const [users, setUsers] = useState({});

//   const login = async () =>{
//     if(!user){
//      const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
//      dispatch ({
//          type: actionType.SET_USER,
//          user: providerData[0],
//      })
//      localStorage.setItem('user', JSON.stringify(providerData[0]))
//     }else{
//       // setIsMenu(!isMenu)
//    }
//  }

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (email === "francis_coder@test.com") {
  //     console.log("na me de here");
  //   } else {
  //     console.log("Who you be?");
  //   }
  //   setEmail("");
  // };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="w-full sign-in mt-0 flex items-center justify-center">
      <div className="bg-white w-[100%] lg:w-[40%] drop-shadow-lg shadow-lg flex flex-col items-center justify-center rounded-md p-12 shadow-shadowColor">
        <img className="text-black" src={images.signInLogo} alt="" />
        <form action="" className="flex flex-col ">
          <label className="text-center mb-4 mt-4 font-Poppins" htmlFor="email">
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
            Sign in
          </motion.button>
          <div className="flex items-center mb-4 font-Poppins text-xs justify-between">
            <hr className="w-[30%]" />
            <p className="text-gray-400">or connect with</p>
            <hr className="w-[30%]" />
          </div>
          <motion.div className="flex items-center justify-center cursor-pointer">
            <motion.img
              whileTap={{ scale: 1.1 }}
              // onClick={login}
              className="w-[120px] h-12"
              src={images.signBtn}
              alt="Google Sign in Button"
            />
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
