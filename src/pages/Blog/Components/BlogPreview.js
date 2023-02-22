import React, { Fragment } from 'react';
import image from '../../../assets/images/web/bg.png'

const BlogPreview = (props) => {
    return (
        <Fragment>
            <div className='flex flex-col py-4 px-4 mt-8 mb-8 bg-[#F4F4F4]'>
                <img className="h-auto w-auto object-cover" src={image} alt="Logo" />
                <div className=" font-semibold text-black text-xl mt-2 2xl:text-2xl mb-2">
                    <p className='text-start'>{props?.question}</p>
                </div>
                <p className='text-start font-normal text-base leading-7 '>{props?.answer}</p>
            </div>
        </Fragment>
    )
}

export default BlogPreview