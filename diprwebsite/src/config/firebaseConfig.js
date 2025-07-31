// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBeeMBwPIBickqsPWiGUj2Pnr7VBK1GEi4",
//   authDomain: "varthajanapada.firebaseapp.com",
//   projectId: "varthajanapada",
//   storageBucket: "varthajanapada.appspot.com",
//   messagingSenderId: "252181671604",
//   appId: "1:252181671604:web:a485b6781c7b3c8969f1e1",
//   measurementId: "G-P251BM4JZP"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// auth.useDeviceLanguage();

// export { auth, RecaptchaVerifier, signInWithPhoneNumber };

// src/config/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeeMBwPIBickqsPWiGUj2Pnr7VBK1GEi4",
  authDomain: "varthajanapada.firebaseapp.com",
  projectId: "varthajanapada",
  storageBucket: "varthajanapada.appspot.com",
  messagingSenderId: "252181671604",
  appId: "1:252181671604:web:a485b6781c7b3c8969f1e1",
  measurementId: "G-P251BM4JZP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };


     

// firebaseConfig.js


// // firebaseConfig.js
// import { initializeApp, getApp, getApps } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCR0ga8taGCQS_LNGT1oG7YX93ST--dS7M",
//   authDomain: "varthajanapadanewsapp.firebaseapp.com",
//   projectId: "varthajanapadanewsapp",
//   storageBucket: "varthajanapadanewsapp.appspot.com",
//   messagingSenderId: "818823084784",
//   appId: "1:818823084784:web:197bf7e0df71e51321a035",
//   measurementId: "G-NEPMBFTVK2",
// };

// const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// export { firebaseApp };
