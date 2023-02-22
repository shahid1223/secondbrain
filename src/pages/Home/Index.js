import React, { Fragment, useState } from 'react'
import Block from './components/Block'

const Index = () => {

  const blockArr = [
    { imagePath: "/assets/images/web/Covers 20+ exams.png", heading: "Covers 20+ exams", description: "second brain covers 20+ exams which includes NEET,JEE and government and banking exams also." },
    { imagePath: "/assets/images/web/add study materials.png", heading: "Add study materials", description: "Gather your all your study materials at one place, whether it is audio, video, images, links, notes or files." },
    { imagePath: "/assets/images/web/Past papers and mock test.png", heading: "Past papers and mock test", description: "Solve mock papers and past papers to boost your confidence and get complete analysis of your test paper." },
    { imagePath: "/assets/images/web/Schedule your day.png", heading: "Schedule your day", description: "Create your personalized time table to increase productivity and get reminders." },
    { imagePath: "/assets/images/web/Track your progress.png", heading: "Track your progress", description: "Track your progress for every subject and also get overall progress. Which will help you to enhance your perfomnace." },
  ];

  const images = [
    '../assets/images/cuate.png',
    '../assets/images/cuate.png',
    '../assets/images/cuate.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };


  return (
    <Fragment>
      <div className='flex justify-center items-center flex-col md:flex-row'>
        <div className="flex-shrink-0 md:ml-4 xl:ml-4 2xl:ml-8">
          <img className="h-auto w-auto md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" src="../assets/images/cuate.png" alt="Logo" />
        </div>
        <div className='md:ml-4 xl:ml-4 2xl:ml-8 mt-4 mb-14'>
          <div className="font-extrabold text-black text-xl md:text-2xl leading-9 mt-2 2xl:text-2xl w-72 h-36">
            <p className='text-center md:text-start'>Get your all study material in one place and your personalized study partner.</p>
          </div>
          <div className='mt-1 flex justify-center items-center md:justify-start md:items-start xl:justify-start 2xl:justify-start xl:items-start 2xl:items-start'>
            <button className="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 rounded-lg md:text-xl xl:text-xl 2xl:text-2xl">
              Download App
            </button>
          </div>
        </div>
      </div>
      {blockArr.map((data, key) => {
        return (
          <Block
            key={key}
            heading={data.heading}
            image={data.imagePath}
            description={data.description}
            index={key}
          />
        )
      })}
      {/* <div>
        <Carousel images={images} />
      </div> */}
      <div className="carousel mt-4 mb-4">
        <div className='flex flex-col justify-center items-center'>
          <ul className="flex justify-center">
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-black mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-black mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-black mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-black mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
              </svg>
            </li>
          </ul>
          <div className="w-289 h-144 text-black text-xl md:text-2xl leading-8 mt-4 2xl:text-2xl">
            <p className='text-center md:text-start xl:text-start 2xl:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."</p>
          </div>
          <img src={images[currentImageIndex]} alt="carousel" className='w-32 h-32 rounded-full' />
          <div className="w-289 h-144 text-black text-xl md:text-2xl leading-8 mt-4 2xl:text-2xl">
            <p className='text-center md:text-start xl:text-start 2xl:text-start'>Vinay verma</p>
          </div>
        </div>
        <div className="navigation-buttons flex justify-end items-center mt-4">
          <button onClick={handlePreviousClick} className="border border-black  text-black font-bold text-xl py-2 px-4 rounded-full mr-1" disabled={currentImageIndex === 0}>
            {"<"}
          </button>
          <button onClick={handleNextClick} className="border border-black  text-black font-bold text-xl py-2 px-4 rounded-full ml-1" disabled={currentImageIndex === images.length - 1}>
            {">"}
          </button>
        </div>
      </div>
      {/* end */}
      <div className='flex justify-center items-center flex-col md:flex-row'>
        <div className="flex-shrink-0 md:ml-4 xl:ml-4 2xl:ml-8">
          <img className="h-auto w-auto md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" src="../assets/images/WEB/home last img.png" alt="Logo" />
        </div>
        <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2'>
          <div className="w-289 h-144 font-bold text-black text-xl md:text-2xl leading-8 mt-4 2xl:text-2xl">
            <p className='text-start md:text-start xl:text-start 2xl:text-start'>Get all your study materials at one place, Solve mock test and past papers, create your persnalized your time-table.</p>
          </div>
          <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2'>
            <div className="w-289 h-144 text-black text-sm md:text-2xl leading-2 mt-4 2xl:text-2xl">
              <p className='text-start md:text-start xl:text-start 2xl:text-start'>Get all your study materials at one place, Solve mock test and past papers, create your persnalized your time-table</p>
            </div>
          </div>
          <div className='mt-4 flex justify-start items-center md:justify-start md:items-start xl:justify-start 2xl:justify-start xl:items-start 2xl:items-start'>
            <button className="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 rounded-lg md:text-xl xl:text-xl 2xl:text-2xl">
              Download App
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Index