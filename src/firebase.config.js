// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7fgFogeW1YpqNm_9Vs3s4bGCTnQuZM0",
  authDomain: "omnigpt-4e225.firebaseapp.com",
  projectId: "omnigpt-4e225",
  storageBucket: "omnigpt-4e225.appspot.com",
  messagingSenderId: "243319302267",
  appId: "1:243319302267:web:68a6eb7caf22d256ef1ade"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);



export { app };
