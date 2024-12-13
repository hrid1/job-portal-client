// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwtehvXYsxPeyBr26ghr3jvaL--UtMc9k",
  authDomain: "job-portal-6155d.firebaseapp.com",
  projectId: "job-portal-6155d",
  storageBucket: "job-portal-6155d.firebasestorage.app",
  messagingSenderId: "257175544519",
  appId: "1:257175544519:web:09ad03ea182674723a94e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
