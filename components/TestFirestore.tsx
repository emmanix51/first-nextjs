"use client";

import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// ✅ Firebase config (make sure this is safe to use on the client for public read access)
const firebaseConfig = {
  apiKey: "AIzaSyAWJC9q7_dLOri5owMOSr607SNx-Nj3SLA",
  authDomain: "nextjs-blog-77481.firebaseapp.com",
  projectId: "nextjs-blog-77481",
  storageBucket: "nextjs-blog-77481.appspot.com", // ✅ Correct domain
  messagingSenderId: "125111704669",
  appId: "1:125111704669:web:cdc58722e02b429a0201b4"
};

// ✅ Initialize Firebase once
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function TestFirestore() {
  useEffect(() => {
    const test = async () => {
      try {
        const blogPostCollectionRef = collection(db, 'blogpost');
        const querySnapshot = await getDocs(blogPostCollectionRef);

        if (querySnapshot.empty) {
          console.log("✅ Collection exists but has no documents.");
        } else {
          console.log("✅ Collection read successfully. Documents:");
          querySnapshot.forEach((doc) => {
            console.log(`📝 Document ID: ${doc.id}`, doc.data());
          });
        }
      } catch (error) {
        console.error("❌ Error reading Firestore collection:", error);
      }
    };

    test();
  }, []);

  return <div>✅ Firestore test running. Check the browser console.</div>;
}
