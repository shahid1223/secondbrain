import React, { Fragment, useState } from "react";
import Raitings from "./Raitings";

const Carousel = () => {
  const crousalArr = [
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: "Vijay Verma",
      year: "2015",
    },
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: "Vijay Verma",
      year: "2016",
    },
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: "Vijay Verma",
      year: "2017",
    },
  ];

  const [index, setindex] = useState(0);
  const nextAndPrevious = (flag) => {
    if (flag === true && index < crousalArr.length - 1) {
      setindex(index + 1);
    } else if (flag === false && index > 0) {
      setindex(index - 1);
    } else if (index === crousalArr.length - 1) {
      setindex(0);
    } else {
      setindex(crousalArr.length - 1);
    }
  };

  return (
    <Fragment>
      <div className="crousalItemBgImg mx-auto md:m-10 mt-8 flex justify-center items-center flex-col md:flex-row-reverse bg-[#F6F9FF] py-2 px-2 md:hidden">
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
        </div>
      </div>
      <div className="sm:hidden md:block">
        <div className="mx-auto md:m-10 mt-8 flex justify-center items-center flex-col md:flex-row-reverse bg-[#F6F9FF] py-2 px-2">
          <p className="text-center m-2 font-medium md:text-start ml-5 crousalItemBgImg">
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
            <Raitings check={true} />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-4 flex justify-end m-4 space-x-2">
        <button
          className="border h-12 w-12 rounded-full"
          onClick={() => nextAndPrevious(false)}
        >
          {"<"}
        </button>
        <button
          className="border h-12 w-12 rounded-full"
          onClick={() => nextAndPrevious(true)}
        >
          {">"}
        </button>
      </div>
    </Fragment>
  );
};

export default Carousel;
