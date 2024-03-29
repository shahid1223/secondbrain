import React,{useEffect} from 'react';
import BlogPreview from './Components/BlogPreview';
import manstudyingfinancialanalytics from '../../assets/images/manstudyingfinancialanalytics.png';
import atthescheduleboard from '../../assets/images/atthescheduleboard.png';
import studyingatnight from '../../assets/images/studyingatnight.png';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBlogs } from '../../states/blog/blogSlice'; 

const Index = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllBlogs());
    }, [dispatch]);


    const blogs = useSelector(state => state.blog)

    const gridArr = ['Exam', 'Motivation', 'Result', 'Career', 'GATE & ESE -Civil'];
    const blogArr = [
        {
            question: "How to create perfect time table?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.",
            image: manstudyingfinancialanalytics
        },
        {
            question: "How to prepare for JEE exam?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.",
            image: atthescheduleboard
        },
        {
            question: "How to study prodyctively?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.",
            image: studyingatnight
        },
        {
            question: "How to study prodyctively?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.",
            image: studyingatnight
        },
        {
            question: "How to study prodyctively?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.",
            image: studyingatnight
        },
        {
            question: "How to study prodyctively?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.",
            image: studyingatnight
        },
        {
            question: "How to study prodyctively?",
            answer: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.",
            image: studyingatnight
        },
    ];
    return (
        <div>
            <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 mt-4 2xl:text-2xl mb-4">
                <p className='text-start md:text-center m-4'>Second brain blog</p>
            </div>
            <div className='grid grid-rows-2 grid-flow-col md:grid-rows-1 md:grid-flow-col lg:grid-rows-none lg:flex lg:justify-center lg:items-center gap-1 m-4'>
                {gridArr.map((data, index) => {
                    return <div className='md:w-auto md:h-auto md:py-2 md:px-2 lg:px-4 py-1 px-1 text-sm  bg-blue-300 rounded-3xl text-center m-1' key={index}>{data}</div>
                })}
            </div>
            <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 mt-12 2xl:text-2xl flex justify-center items-center mb-4">
                <p className='text-center'>Latest blogs</p>
            </div>
            {/* <div className='flex justify-end items-end m-4'>
                {isAuthenticated && token !== null && !loading &&
                    <button className="m-4 bg-[#0054B4] text-left hover:bg-blue-700 text-white py-2 px-4 rounded-lg" onClick={() => console.log("workin")}>
                        New Blog
                    </button>
                }
            </div> */}
            <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2  m-4'>
                {blogs?.allBlogs?.map((data, index) => {
                    return <BlogPreview key={index} id={data._id} question={data.question} answer={data.sortDiscription} image={data.image} />
                })}
            </div>
        </div>
    )
}

export default Index