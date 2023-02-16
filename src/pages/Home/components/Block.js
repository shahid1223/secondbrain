import React, { Fragment } from 'react'

const Block = ({image, heading, description}) => {
    return (
        <Fragment>
            <div className="w-289 h-144 font-bold text-black text-xl md:text-2xl leading-8 mt-4 2xl:text-2xl flex items-center">
                <span className='bg-blue-400 w-2 h-8'></span>
                <p className='text-center md:text-start xl:text-start 2xl:text-start ml-2'>{heading}</p>
            </div>
            <div className='flex justify-center items-center flex-col md:flex-row mt-4'>
                <div className="flex-shrink-0 md:ml-4 xl:ml-4 2xl:ml-8">
                    <img className="h-auto w-auto md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" src={`../../../${image}`} alt="Logo" />
                </div>
                <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2'>
                    <div className="w-289 h-144 text-black text-sm md:text-2xl leading-2 mt-4 2xl:text-2xl">
                        <p className='text-start md:text-start xl:text-start 2xl:text-start'>{description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Block