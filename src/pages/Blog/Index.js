import React from 'react';
import BlogPreview from './Components/BlogPreview'

const Index = () => {
    const gridArr = ['Exam', 'Motivation', 'Result', 'Career', 'GATE & ESE -Civil'];
    const blogArr = [
        {
            question: "How to create perfect time table?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."
        },
        {
            question: "How to prepare for JEE exam?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."
        },
        {
            question: "How to study prodyctively?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."
        },
    ];
    return (
        <div>
            <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 mt-4 2xl:text-2xl flex items-center mb-4">
                <p className='text-center md:text-start xl:text-start 2xl:text-start ml-2'>Second brain blog</p>
            </div>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
                {gridArr.map((data, index) => {
                    return <div className='w-auto h-auto p-2 bg-blue-300 rounded-3xl text-center m-1' key={index}>{data}</div>
                })}
            </div>
            <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 mt-4 2xl:text-2xl flex justify-center items-center mb-4">
                <p className='text-center'>Latest blogs</p>
            </div>
            {blogArr.map((data, index) => {
                return <BlogPreview key={index} question={data.question} answer={data.answer}/>
            })}
        </div>
    )
}

export default Index