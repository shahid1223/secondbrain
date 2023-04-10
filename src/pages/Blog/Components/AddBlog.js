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
  const [blogExtraInfo, setBlogExtraInfo] = useState({
    question: "",
    discription: "",
    draft: text
  });


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
  }, [selectedBlog?.selectedBlog]);

  const onChange = event => {
    setBlogExtraInfo({ ...blogExtraInfo, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setBlogExtraInfo({ ...blogExtraInfo, text:text})
  } ,[text])

  console.log("blogExtraInfo => ",blogExtraInfo);


  // const sanitizedData = () => ({
  //   __html: DOMPurify.sanitize(text)
  // });
  return (
    <>
      <div className="mt-4 mb-4 container flex justify-center flex-col items-center w-[50%]">
        <p>{blogExtraInfo.question}</p>
        <p>{blogExtraInfo.discription}</p>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
      </div>
      <div className="flex justify-center items-center flex-col mt-4 mb-4">


        <div class="mb-6 w-[50%]">
          <label for="Question" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question</label>
          <input type="text" id="questuin" name="question" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
          <label for="dis" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
          <input type="text" id="dis" name="discription" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
          <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Banner Image</label>
          <input type="file" id="bannerImg" name="bannerImg" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>


        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '200px' }} />
        <button class="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded-lg" onClick={() => {
          if (text) {
            dispatch(createBlog(blogExtraInfo));
          }
        }}>Save</button>
      </div>
    </>
  )
}



