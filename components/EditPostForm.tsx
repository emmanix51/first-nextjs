import React from 'react'
import { updateDoc,doc } from 'firebase/firestore'

export default function EditPostForm() {
  return (
    <div>EDIT FORM</div>
    // <div className='p-4 border my-4'>
    //   <h2 className="text-xl mb-2">Create own post</h2>
    //   <input
    //     type="text"
    //     placeholder='Author'
    //     value={author}
    //     onChange={(e) => setAuthor(e.target.value)}
    //     className="block mb-2 p-2 border w-full"
    //   />
    //   <input
    //     type="text"
    //     placeholder='Title'
    //     value={title}
    //     onChange={(e) => setTitle(e.target.value)}
    //     className="block mb-2 p-2 border w-full"
    //   />
    //   <textarea
    //     placeholder='Content'
    //     value={content}
    //     onChange={(e) => setContent(e.target.value)}
    //     className="block mb-2 p-2 border w-full h-32"
    //   />
    //   <button
    //     onClick={handleSave}
    //     disabled={loading}
    //     className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 disabled:opacity-50"
    //   >
    //     {loading ? "Saving..." : "Save"}
    //   </button>
    // </div>
  )
}
