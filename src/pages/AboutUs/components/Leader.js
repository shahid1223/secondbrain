import React, { Fragment } from 'react'

const Leader = ({ image, name, position, description }) => {
    return (
        <Fragment>
        
        <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2 md:w-[700px] lg:w-[800px] md:flex md:justify-center md:items-center'>
            <div className="w-289 h-144 text-black text-sm md:text-2xl leading-2 2xl:text-2xl md:flex md:justify-center md:items-center">

                <div className="flex justify-center items-center">
                    <img className="h-[300px] w-11/12 md:h-full md:w-5/6 object-cover rounded-lg" src={image} alt="Logo" />
                </div>
                <div className='m-3'>
                    <p className='text-start font-extrabold mt-2'>{name}</p>
                    <p className='text-start xl:text-start 2xl:text-start mt-2'>{position}</p>
                    <p className='text-start w-auto font-normal text-base leading-7 mt-8'>{description}</p>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Leader