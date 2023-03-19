import React, { Fragment } from "react";
import Carousel from "../../components/Crousal";
import Block from "./components/Block";
import Slider from "react-slick";
import Raitings from "../../components/Raitings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {


  const blockArr = [
    {
      imagePath: "/assets/images/web/Covers_20+_exams.png",
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

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green", position: "relative" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  const crousalArr = [
    {
      review: "Good",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: "shahid",
      year: "2015",
    },
    {
      review: "Atiq",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: "Atiq",
      year: "2016",
    },
    {
      review: "Atmish",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: "Atmish",
      year: "2017",
    },
  ];

  // const [index, setindex] = useState(0);
  // const nextAndPrevious = (flag) => {
  //   if (flag === true && index < crousalArr.length - 1) {
  //     setindex(index + 1);
  //   } else if (flag === false && index > 0) {
  //     setindex(index - 1);
  //   } else if (index === crousalArr.length - 1) {
  //     setindex(0);
  //   } else {
  //     setindex(crousalArr.length - 1);
  //   }
  // };

  return (
    <Fragment>
      <div className="flex justify-center items-center flex-col md:flex-row homeFirstContainerBg">
        <div className="flex-shrink-0 md:ml-4 xl:ml-4 2xl:ml-8">
          <img
            className="h-auto w-auto md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-80 xl:w-80 ll:w-[500px] ll:h-[500px]  object-contain"
            src="/assets/images/cuate.png"
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

      <div className="md:hidden">
        <Carousel />
      </div>

      <div className="m-2 hidden md:block">
        <Slider {...settings}>
          {crousalArr.map((data, index) => {
            return (
              <div key={index}>
                <div className="crousalItemBgImg mx-auto md:m-10 mt-8 flex justify-center items-center flex-col md:flex-row-reverse bg-[#F6F9FF] py-2 px-2">
                  <Raitings check={true} />
                  <p className="text-center m-2 font-medium md:text-start ml-5">
                    {crousalArr[index]?.review}
                  </p>
                  <div>
                    <img
                      src={crousalArr[index]?.image}
                      className="h-28 w-28 m-2 rounded-full"
                      alt="Tailwind Play"
                    />
                    <p className="font-bold text-center m-2">{crousalArr[index]?.name}</p>
                    <p className="text-center">{crousalArr[index]?.year}</p>
                    <Raitings check={false} />
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

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
