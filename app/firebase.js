import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {collection} from "firebase/firestore";
import { getDocs } from "firebase/firestore";


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

const blogPostCollectionRef = collection(db,'blogpost');

const testCollectionConnection = async () => {
  try {
    const querySnapshot = await getDocs(blogPostCollectionRef);
    querySnapshot.forEach((doc) => {
      console.log(`Document ID: ${doc.id}, Data:`, doc.data());
    });

    if (querySnapshot.empty) {
      console.log("Collection exists but has no documents.");
    } else {
      console.log("Collection read successfully.");
    }
  } catch (error) {
    console.error("Error reading collection:", error);
  }
};

testCollectionConnection();