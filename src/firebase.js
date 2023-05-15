// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7fgFogeW1YpqNm_9Vs3s4bGCTnQuZM0",
  authDomain: "omnigpt-4e225.firebaseapp.com",
  projectId: "omnigpt-4e225",
  storageBucket: "omnigpt-4e225.appspot.com",
  messagingSenderId: "1:243319302267:web:68a6eb7caf22d256ef1ade",
  appId: "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"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);