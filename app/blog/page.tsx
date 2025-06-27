"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Blogcard from "@/components/Blogcard";
import BlogForm from "@/components/BlogForm";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface BlogPost{
  id: string;
  title: string;
  content: string;
  author: string;
}

export default function Page() {
  const [posts,setPosts] = useState<BlogPost[]>([])
  
  
  const getPosts =async()=>{
      const posts = await getDocs(collection(db, "blogs"));
      setPosts(
        posts.docs.map((post)=>({...post.data(),id:post.id})) as BlogPost[]
      )
    }

  useEffect(()=>{
    getPosts()
  },[])

  return (
    <div className="items-center justify-items-center min-h-screen">
      <div className="py-8 space-y-2">
        <h1 className="text-slate-900 text-3xl">Welcome to Blogs</h1>
        <Input />
      </div>

      <BlogForm onPostCreated={getPosts} />

      <ScrollArea className="h-full w-1/2 rounded-md border p-4 overflow-auto">
        {posts.map((post) => (
          <Blogcard key={post.id} post={post} getPosts={getPosts}/>
         
        ))}
      </ScrollArea>
      <Link href={"../"}>
        <Button>Return to home</Button>
      </Link>
      {/* <button onClick={showBlogs}>Show blogs</button> */}
    </div>
  );
}
