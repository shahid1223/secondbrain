import React from 'react';
import Raitings from './Raitings';

const Carousel = () => {

    return (
        <div className="mx-auto md:m-10 mt-8 flex justify-center items-center flex-col md:flex-row-reverse bg-[#F6F9FF] py-2 px-2">
            <Raitings check={true} />
            <p className="text-center m-2 font-medium md:text-start ml-5">
                Perfect for learning how the framework works, prototyping a new idea,
                or creating a demo to share online.Perfect for learning how the framework works, prototyping.
            </p>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    className="h-28 w-28 m-2 rounded-full"
                    alt="Tailwind Play"
                />
                <p className="font-bold text-center m-2">Vijay kumar</p>
                <p className="text-center">NEET 2022</p>
                <Raitings check={false}/>
            </div>
        </div>
    );
};

export default Carousel;
