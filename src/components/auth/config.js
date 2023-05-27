// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB5z57v8XatK8v1g4p8wF8ajWd8h3F3ntQ",
  authDomain: "efootballconnect.firebaseapp.com",
  projectId: "efootballconnect",
  storageBucket: "efootballconnect.appspot.com",
  messagingSenderId: "140219972848",
  appId: "1:140219972848:web:4df5f47664106ce6f49635",
  measurementId: "G-GPFTHBD1N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export{auth, provider}
// const analytics = getAnalytics(app);