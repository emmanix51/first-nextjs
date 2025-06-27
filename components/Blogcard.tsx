import { deleteDoc,doc } from "firebase/firestore";
import Link from "next/link";
import { db } from "@/app/firebase";

type BlogcardProps = {
  post: {
    id: string;
    title: string;
    content: string;
    author: string;
  };
  getPosts:()=>void;
  
};



function Blogcard({ post,getPosts }: BlogcardProps) {
  const deletePost = async(id:string)=>{
    await deleteDoc(doc(db,"blogs",id));
    getPosts?.()
  }
  
  return (
    <div className="flex space-x-4 justify-between items-center" key={post.id}>
      <Link href={`/blog/${post.id}`}>
        <h4 className="font-semibold text-red-700">{post.title}: </h4>
        <p>{post.content}</p>
        <small>Written by: {post.author}</small>
      </Link>

      <div className="flex gap-4">
        <button className="bg-red-700 text-white px-4 cursor-pointer rounded" onClick={()=>deletePost(post.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Blogcard;
