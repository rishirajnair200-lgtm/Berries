// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNYfy5Mha_qfICk5R9yjqaOP7G_PhAoDI",
  authDomain: "berries-cafe-admin.firebaseapp.com",
  projectId: "berries-cafe-admin",
  storageBucket: "berries-cafe-admin.firebasestorage.app",
  messagingSenderId: "934492584472",
  appId: "1:934492584472:web:b9f6c5969cb3e088d2216d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase is connected!");
