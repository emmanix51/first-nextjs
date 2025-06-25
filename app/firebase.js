import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWJC9q7_dLOri5owMOSr607SNx-Nj3SLA",
  authDomain: "nextjs-blog-77481.firebaseapp.com",
  projectId: "nextjs-blog-77481",
  storageBucket: "nextjs-blog-77481.firebasestorage.app",
  messagingSenderId: "125111704669",
  appId: "1:125111704669:web:cdc58722e02b429a0201b4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);