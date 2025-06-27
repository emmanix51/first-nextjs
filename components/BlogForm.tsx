"use client";

import React, { useState } from 'react';
import { db } from "../app/firebase"; // adjust the path if needed
import { collection, addDoc, serverTimestamp } from "firebase/firestore";



interface BlogFormProps{
  onPostCreated?:()=>void;
}

export default function BlogForm({onPostCreated}: BlogFormProps) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!author || !title || !content) {
      alert("All fields are required.");
      return;
    }

    const blogData = {
      author,
      title,
      content,
      createdAt: serverTimestamp(),
    };

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "blogs"), blogData);
      console.log("Document written with ID: ", docRef.id);
      alert("Blog post saved!");

      // Clear form
      setAuthor('');
      setTitle('');
      setContent('');
      onPostCreated?.();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to save blog post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-4 border my-4'>
      <h2 className="text-xl mb-2">Create own post</h2>
      <input
        type="text"
        placeholder='Author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="block mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block mb-2 p-2 border w-full"
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block mb-2 p-2 border w-full h-32"
      />
      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
