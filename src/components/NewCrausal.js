import React, { useRef } from "react";
import Slider from "react-slick";
import Raitings from "./Raitings";
import RaitingsMd from "./RaitingsMd";

const PreviousNextMethods = () => {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
    };

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

    return (
        <>
            <Slider ref={sliderRef} {...settings} className="overflow-hidden">
                {
                    crousalArr.map((data, index) => {
                        return (
                            <div key={index + 1}>
                                <div className="crousalItemBgImg mx-auto md:m-4 mt-8 flex justify-center items-center flex-col md:flex-row-reverse bg-[#F6F9FF] py-2 px-2">
                                    <Raitings check={true} />
                                    <p className="text-center m-2 font-medium md:text-start ml-5 md:w-96">
                                        {data.review}
                                    </p>
                                    <div>
                                        <img
                                            src={data.image}
                                            className="h-28 w-28 m-2 rounded-full"
                                            alt="Tailwind Play"
                                        />
                                        <p className="font-bold text-center m-2">{data.name}</p>
                                        <p className="text-center">{data.year}</p>
                                        {isMobile === true ? null : <RaitingsMd check={false} />}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div style={{ textAlign: "end" }} className="mt-4 mb-4 flex justify-end m-4 space-x-2">
                <button className=" border h-12 w-12 rounded-full" onClick={previous}>
                    {"<"}
                </button>
                <button className=" border h-12 w-12 rounded-full" onClick={next}>
                    {">"}
                </button>
            </div>
        </>
    );
};

export default PreviousNextMethods;
