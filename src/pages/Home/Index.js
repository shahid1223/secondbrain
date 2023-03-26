import React, { Fragment } from "react";
import Block from "./components/Block";
import NewCrausal from '../../components/NewCrausal';

const Index = () => {

  const blockArr = [
    {
      imagePath: "/assets/images/web/Covers 20+ exams.png",
      heading: "Covers 20+ exams",
      description:
        "second brain covers 20+ exams which includes NEET,JEE and government and banking exams also.",
    },
    {
      imagePath: "/assets/images/web/add study materials.png",
      heading: "Add study materials",
      description:
        "Gather your all your study materials at one place, whether it is audio, video, images, links, notes or files.",
    },
    {
      imagePath: "/assets/images/web/Past papers and mock test.png",
      heading: "Past papers and mock test",
      description:
        "Solve mock papers and past papers to boost your confidence and get complete analysis of your test paper.",
    },
    {
      imagePath: "/assets/images/web/Schedule your day.png",
      heading: "Schedule your day",
      description:
        "Create your personalized time table to increase productivity and get reminders.",
    },
    {
      imagePath: "/assets/images/web/Track your progress.png",
      heading: "Track your progress",
      description:
        "Track your progress for every subject and also get overall progress. Which will help you to enhance your perfomnace.",
    },
  ];



  return (
    <Fragment>
      <div className="flex justify-center items-center flex-col md:flex-row homeFirstContainerBg">
        <div className="flex-shrink-0 md:ml-4 xl:ml-4 2xl:ml-8">
          <img
            className="h-auto w-auto md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-80 xl:w-80 ll:w-[500px] ll:h-[500px]  object-contain"
            src="../assets/images/cuate.png"
            alt="Logo"
          />
        </div>
        <div className="md:ml-4 xl:ml-4 2xl:ml-8 mt-4 mb-14">
          <div className="font-extrabold text-black text-2xl ms:w-64 ml:w-72 md:text-2xl leading-8 m-8  ll:text-4xl ll:w-[530px] w-60">
            <p className="text-center md:text-start">
              Get your all study material in one place and your personalized
              study partner.
            </p>
            <div className="mt-5  flex justify-center items-center md:justify-start md:items-start xl:justify-start 2xl:justify-start xl:items-start 2xl:items-start">
              <button className="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 font-thin rounded-lg md:text-lg xl:text-xl">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center md:flex-col">
        {blockArr.map((data, key) => {
          return (
            <Block
              key={key}
              heading={data.heading}
              image={data.imagePath}
              description={data.description}
              index={key}
            />
          );
        })}
      </div>

      <NewCrausal />

      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="flex-shrink-0 md:ml-4 xl:ml-4 2xl:ml-8">
          <img
            className="h-auto w-auto md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-80 xl:w-80 ll:w-[500px] ll:h-[500px]  object-contain"
            src="/assets/images/web/home last img.png"
            alt="Logo"
          />
        </div>
        <div className="">
          <div className=" ms:w-80 ml:w-96 ll:w-[630px] w-72">
            <p className="font-bold text-black text-xl text-start leading-8  ll:text-4xl">
              Get all your study materials at one place, Solve mock test and past papers, create your persnalized your time-table
            </p>
            <p className="mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
            </p>
            <div className="mt-5  flex justify-start items-start">
              <button className="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 font-thin rounded-lg md:text-lg xl:text-xl">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
