// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaONy5-zuZxa8NScKMZXe0NbkoAajBLDM",
  authDomain: "abdulsapp-de62a.firebaseapp.com",
  projectId: "abdulsapp-de62a",
  storageBucket: "abdulsapp-de62a.appspot.com",
  messagingSenderId: "945422527616",
  appId: "1:945422527616:web:52d5515bb577762ee9ca65",
  measurementId: "G-GHMV1JXLRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
