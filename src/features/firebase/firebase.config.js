// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeheu8EliVXapVB2ZsGO-haGtuRg2BAfk",
  authDomain: "thunder-organics.firebaseapp.com",
  projectId: "thunder-organics",
  storageBucket: "thunder-organics.appspot.com",
  messagingSenderId: "112711503213",
  appId: "1:112711503213:web:064b54602b8fc0550dde64",
  measurementId: "G-L0KJ7DMECW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
