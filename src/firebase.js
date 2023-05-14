// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7fgFogeW1YpqNm_9Vs3s4bGCTnQuZM0",
  authDomain: process.env.API_KEY_AUTHDOMAIN,
  projectId: process.env.API_KEY_PROJECTID,
  storageBucket: process.env.API_KEY_STORAGE_BUCKET,
  messagingSenderId: process.env.API_KEY_MESSAGINGSENDERID,
  appId: process.env.API_KEY_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);