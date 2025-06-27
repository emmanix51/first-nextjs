import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { notFound } from "next/navigation";
import { Metadata } from "next";
// import type { PageProps } from "next"; 

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }:  PageProps ): Promise<Metadata> {
  const  docRef = doc(db, "blogs", params.slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return {};

  const data = docSnap.data() as BlogPost;

  return {
    title: data.title,
    description: data.content.slice(0, 100),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const docRef = doc(db, "blogs", params.slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return notFound();

  const post = docSnap.data() as BlogPost;

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
      <small className="block mt-4 text-gray-500">Written by: {post.author}</small>
    </div>
  );
}
