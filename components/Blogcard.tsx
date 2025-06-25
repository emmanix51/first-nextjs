import Link from "next/link";

type BlogcardProps = {
  post: {
    id: number;
    title: string;
    content: string;
  };
};

function Blogcard({ post }: BlogcardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="flex flex-col space-x-4 min-w-[1200px]" key={post.id}>
      <h4 className="font-semibold text-red-700">{post.title}: </h4>
      <p>{post.content}</p>
    </Link>
  );
}

export default Blogcard;
