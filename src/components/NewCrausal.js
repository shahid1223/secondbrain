import React from 'react';
import Slider from 'react-slick';



const SliderComponent = () => {


    const CustomButtonGroup = ({ next, previous }) => {
        return (
            <div className="custom-button-group">
                <button className="button button--previous" onClick={previous}>
                    Previous
                </button>
                <button className="button button--next" onClick={next}>
                    Next
                </button>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: () => <div className="dot"></div>,
        customButtonGroup: <CustomButtonGroup />
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
    return (
        <Slider {...settings} >
            {crousalArr.map((data, index) => {
                return (
                    <div key={index}>
                        <div className="crousalItemBgImg mx-auto md:m-10 mt-8 flex justify-center items-center flex-col md:flex-row-reverse bg-[#F6F9FF] py-2 px-2">
                            {/* <Raitings check={true} /> */}
                            <p className="text-center m-2 font-medium md:text-start ml-5">
                                {data?.review}
                            </p>
                            <div>
                                <img
                                    src={data?.image}
                                    className="h-28 w-28 m-2 rounded-full"
                                    alt="Tailwind Play"
                                />
                                <p className="font-bold text-center m-2">{data?.name}</p>
                                <p className="text-center">{data?.year}</p>
                                {/* <Raitings check={false} /> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    );
};

export default SliderComponent;
