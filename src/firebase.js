// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACYa9FxI58Um0VIcraU8c-rPViunOT6Aw",
  authDomain: "to-do-app-88bb2.firebaseapp.com",
  projectId: "to-do-app-88bb2",
  storageBucket: "to-do-app-88bb2.appspot.com",
  messagingSenderId: "578284416470",
  appId: "1:578284416470:web:27a2076245fd0cc9800877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//const analytics = getAnalytics(app);

export default app; 