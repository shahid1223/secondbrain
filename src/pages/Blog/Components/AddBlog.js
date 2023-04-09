//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import React, { useState, useEffect } from "react";
import { Editor } from "primereact/editor";
import DOMPurify from 'dompurify';
import Context from '../../../context/Context';
import { useDispatch, useSelector } from "react-redux";
import { createBlog, fetchSingleBlogById } from '../../../states/blog/blogSlice';
import { useSearchParams } from "react-router-dom";
import { async } from "q";

export default function AddBlog() {

  const dispatch = useDispatch();
  const selectedBlog = useSelector(state => state.blog)
  const [searchParams] = useSearchParams();

  const [text, setText] = useState('');

  useEffect(() => {
    if (searchParams.get('id') !== null) {
      dispatch(fetchSingleBlogById(searchParams.get('id')));
    } else {
      setText('');
    }
  }, [dispatch, searchParams.get('id')]);

  useEffect(() => {
    if (selectedBlog?.selectedBlog) {
      setText(selectedBlog.selectedBlog.draft);
    }
  }, [selectedBlog?.selectedBlog])

  // const sanitizedData = () => ({
  //   __html: DOMPurify.sanitize(text)
  // });
  return (
    <>
      <div className="mt-4 mb-4 container flex justify-start items-start">
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
      </div>
      <div className="flex justify-center items-center flex-col mt-4 mb-4">
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '200px' }} />
        <button class="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded-lg" onClick={() => {
          if (text) {
            dispatch(createBlog(text));
          }
        }}>Save</button>
      </div>
    </>
  )
}



