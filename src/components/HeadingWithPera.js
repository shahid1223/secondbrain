import React, { Fragment } from 'react'

const HeadingWithPera = ({ heading , description, index}) => {
    const check = index + 1;
    return (
        <Fragment>
        <div className={`w-289 h-144 mb-4 font-semibold text-black text-2xl md:text-2xl leading-8 2xl:text-2xl flex ${check % 2 === 0 ? 'md:items-end md:justify-end' : 'items-center'}  mt-8`}>
            <div className='bg-blue-400 w-2 h-8'></div>
            <p className='text-center text-2xl md:text-start xl:text-start 2xl:text-start ml-2'>{heading}</p>
        </div>
        {description && <p className='text-start font-normal text-base leading-7'>{description && description}</p>}
        </Fragment>
    )
}

export default HeadingWithPera