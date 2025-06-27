"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust path to your firebase config


interface BlogPost {
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const [docData, setDocData] = useState<BlogPost|null>(null);

  useEffect(() => {
    async function fetchDoc(slug: string) {
      try {
        const docRef = doc(db, "blogs", slug); // Using slug instead of "SF"
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocData(docSnap.data() as BlogPost);
        } else {
          setDocData(null);
        }
      } catch (error) {
        console.error("Error fetching doc:", error);
      }
    }

    if (typeof slug === "string") {
      fetchDoc(slug);
    }
  }, [slug]);

  return (
    <div>
      <h1>Slug: {slug}</h1>
      <pre>{docData ? JSON.stringify(docData, null, 2) : "Loading..."}</pre>
    </div>
  );
}
