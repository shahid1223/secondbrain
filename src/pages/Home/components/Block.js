import React, { Fragment } from 'react'

const Block = ({ image, heading, description, index }) => {
    const check = index +1;
    return (
        <Fragment>
            <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 2xl:text-2xl flex items-center mt-8">
                <div className='bg-blue-400 w-2 h-8 md:hidden'></div>
                <p className='text-center text-2xl md:text-start xl:text-start 2xl:text-start ml-2 md:hidden'>{heading}</p>
            </div>
            <div className={`flex justify-center items-center flex-col ${check % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} mt-8`}>
                <div className="md:ml-4 xl:ml-4 2xl:ml-8">
                    <img className="h-auto w-auto  lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 object-fit" src={`../../../${image}`} alt="Logo" />
                </div>
                <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2 h-auto w-auto  lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 hidden md:block'>
                    <div className="w-289 h-144 text-black text-sm md:text-2xl leading-2 2xl:text-2xl">
                        <div className="w-289 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 mt-4 2xl:text-2xl flex items-center mb-4">
                            <div className='bg-blue-400 w-2 h-8 md:block'></div>
                            <p className='text-center md:text-start xl:text-start 2xl:text-start ml-2 md:block'>{heading}</p>
                        </div>
                        <p className='text-start w-auto font-normal text-base leading-7 '>{description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Block