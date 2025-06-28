"use client";

import React, { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import { getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase"; // adjust if needed
import EditPostForm from "@/components/EditPostForm";

interface BlogPost {
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;

  const [docData, setDocData] = useState<BlogPost | null>(null);

  const deletePost = async(id:string)=>{
      await deleteDoc(doc(db,"blogs",id));
      redirect("/blog")
    }

  useEffect(() => {
    async function fetchDoc(slug: string) {
      try {
        const docRef = doc(db, "blogs", slug);
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

    if (slug) fetchDoc(slug);
  }, [slug]);

  const handleUpdate = async (updatedData: BlogPost) => {
    try {
      const docRef = doc(db, "blogs", slug);
      await updateDoc(docRef, updatedData as Partial<BlogPost>);
      alert("Post updated successfully!");
      setDocData((prev) => ({ ...prev!, ...updatedData }));
    } catch (error) {
      console.error("Error updating doc:", error);
      alert("Failed to update post.");
    }
  };

  return (
    <div>
      {docData ? (
        <>
          <EditPostForm post={docData} onSubmit={handleUpdate} />
          <div
            className="w-1/2 h-screen mx-auto flex space-x-4 justify-between items-center"
            key={slug}
          >
            <div >
              <h4 className="font-semibold text-red-700">{docData.title}: </h4>
              <p>{docData.content}</p>
              <small>Written by: {docData.author}</small>
            </div>

            <div className="flex gap-4">
              <button
                className="bg-red-700 text-white px-4 cursor-pointer rounded"
                onClick={() => deletePost(slug)}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
