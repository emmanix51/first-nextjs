import React, { useState } from 'react';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

export default function EditPostForm({
  post,
  onSubmit,
}: {
  post: BlogPost;
  onSubmit: (data: BlogPost) => void;
}) {
  const [formData, setFormData] = useState<BlogPost>(post);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className='mx-auto border px-4 py-2'>
      <form onSubmit={handleSubmit} className='flex gap-2 mx-auto justify-center text-center items-center'>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className='border'
      />
      <label htmlFor="author">Author</label>
      <input
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        className='border'

      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        className='border'

      />
      <button type="submit" className='border-2 p-2' >Save Changes</button>
    </form>
    </div>
    
  );
}
