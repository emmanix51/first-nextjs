import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";


export default async function page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <div className="items-center justify-items-center min-h-screen">
      <div className="py-8 space-y-2">
        <h1 className="text-slate-900 text-3xl">Welcome to Blogs</h1>
        <Input />
      </div>

      <ScrollArea className="h-full w-1/2 rounded-md border p-4 overflow-auto">
        {posts.map((post: { id: number; title: string;content:string }) => (
          <div className="flex space-x-4 min-w-[1200px]" key={post.id}>
            <h4 className="font-semibold" >{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </ScrollArea>
      <Link href={"../"}>
        <Button>Return to home</Button>
      </Link>
    </div>
  );
}
