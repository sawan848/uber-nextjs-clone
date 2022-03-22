// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0snFi9ITZrubGsVdcVZj1BY3EhTZQvbg",
  authDomain: "uber-nextjs-clone-13298.firebaseapp.com",
  projectId: "uber-nextjs-clone-13298",
  storageBucket: "uber-nextjs-clone-13298.appspot.com",
  messagingSenderId: "269605481011",
  appId: "1:269605481011:web:fc4e291db9449f08f21146",
  measurementId: "G-77VWD097KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider=new GoogleAuthProvider()
const auth=getAuth()

export {app,provider,auth}
