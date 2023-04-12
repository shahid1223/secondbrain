
import React, { useState, useEffect } from "react";
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from "react-redux";
import {  fetchSingleBlogById } from '../../../states/blog/blogSlice';
import { useSearchParams, } from "react-router-dom";


const SingleBlog = () => {

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
      setBlogExtraInfo({ ...blogExtraInfo, draft: "", question: "", discription: "" });
    }
  }, [dispatch, searchParams.get('id')]);

  useEffect(() => {
    if (selectedBlog?.selectedBlog) {
      setText(selectedBlog.selectedBlog.draft);
      setBlogExtraInfo({ ...blogExtraInfo, draft: selectedBlog.selectedBlog.draft, question: selectedBlog.selectedBlog.question, discription: selectedBlog.selectedBlog.sortDiscription });
    }
  }, [selectedBlog?.selectedBlog]);


  // const sanitizedData = () => ({
  //   __html: DOMPurify.sanitize(text)
  // });
  return (
    <>
      <div className="mt-4 mb-4 flex justify-center flex-col items-center">
        <p className="text-start">{blogExtraInfo.question}</p>
        <p className="text-start">{blogExtraInfo.discription}</p>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
      </div>
    </>
  )
}

export default SingleBlog



