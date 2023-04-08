//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import React, { useState, useContext } from "react";
import { Editor } from "primereact/editor";
import DOMPurify from 'dompurify';
import Context from '../../../context/Context';;


export default function AddBlog() {

  const blog = useContext(Context);

  const {uploadBlogs} = blog;

  const [text, setText] = useState('');
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(text)
  });
  console.log(text)
  return (
    <>
      <div className="mt-4 mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
      <div className="flex justify-center items-center flex-col mt-4 mb-4">
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '200px' }} />
        <button class="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded-lg" onClick={() => {
          if(text){
            uploadBlogs(text)
          }
        }}>Save</button>
      </div>
    </>
  )
}



