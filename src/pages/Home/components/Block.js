import React, { Fragment } from 'react'

const Block = ({ image, heading, description, index }) => {
    const check = index + 1;
    return (
        <Fragment>
        <div className="md:w-[700px] lg:w-[800px]">
            <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 2xl:text-2xl flex items-center mt-8">
                <div className='bg-blue-400 w-2 h-8 md:hidden'></div>
                <p className='text-center text-2xl md:text-start xl:text-start 2xl:text-start ml-2 md:hidden'>{heading}</p>
            </div>
            <div className={`flex justify-center items-center flex-col ${check % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} mt-8 py-2 px-2`}>
                <div className="flex justify-center items-center">
                    <img className="h-auto w-auto  md:h-auto md:w-2/4 object-fill md:shadow-2xl" src={`${image}`} alt="Logo" />
                </div>
                <div className='p-2 h-auto w-auto  lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 md:flex md:justify-center md:items-center'>
                    <div className="w-289 h-144 text-black text-sm md:text-2xl leading-2 2xl:text-2xl">
                        <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 mt-4 2xl:text-2xl flex items-center mb-4">
                            <div className='bg-blue-400 w-2 h-8 hidden md:block'></div>
                            <p className='text-center md:text-start xl:text-start 2xl:text-start ml-2 hidden md:block'>{heading}</p>
                        </div>
                        <p className='text-start w-auto font-normal text-base leading-7 '>{description}</p>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Block