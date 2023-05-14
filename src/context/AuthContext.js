import { useContext, createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [userEmail, setUserEmail] = useState(localStorage.getItem("email"))
  const provider = new GoogleAuthProvider();
  // let email = localStorage.getItem("email");

  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  const googleSignInMobile = () => {
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
      // console.log("Email", userEmail);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, googleSignInMobile, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
