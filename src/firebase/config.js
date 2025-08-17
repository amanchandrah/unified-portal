// src/firebase/config.js
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBg3CWhAbgQWvCfx2w5GNJg9ho-80vGGH8",
  authDomain: "unified-1.firebaseapp.com",
  projectId: "unified-1",
  storageBucket: "unified-1.firebasestorage.app",
  messagingSenderId: "163666438846",
  appId: "1:163666438846:web:fd1b5774371365f2dc4cef",
  measurementId: "G-ZGXM0D5FWC"
};

// initialize only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// analytics only when supported (client side)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}

export { app, analytics };
export const db = getFirestore(app);