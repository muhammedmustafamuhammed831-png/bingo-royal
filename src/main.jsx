import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCG4cUcG04E1f2moCnmEwG1UiUwHdHuUrs",
  authDomain: "konkan-fc43e.firebaseapp.com",
  projectId: "konkan-fc43e",
  storageBucket: "konkan-fc43e.firebasestorage.app",
  messagingSenderId: "707049357885",
  appId: "1:707049357885:web:f0dab6834d2c4600846054",
  measurementId: "G-E0Y2RRPVKX"
};

initializeApp(firebaseConfig);

console.log("Firebase Connected");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
