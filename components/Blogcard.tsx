type BlogcardProps = {
  post: {
    id: number;
    title: string;
    content: string;
  };
};

function Blogcard({ post }: BlogcardProps) {
  return (
    <div className="flex flex-col space-x-4 min-w-[1200px]" key={post.id}>
      <h4 className="font-semibold text-red-700">{post.title}: </h4>
      <p>{post.content}</p>
    </div>
  );
}

export default Blogcard;
