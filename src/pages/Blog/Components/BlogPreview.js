import React, { Fragment, useContext } from 'react';
import secondBrainContext from '../../../context/Context';

const BlogPreview = (props) => {
    const auth = useContext(secondBrainContext);
    const {isAuthenticated:{isLoading , token}} = auth;
    return (
        <Fragment>
            <div className='flex flex-col py-4 px-4 mt-8 mb-8 bg-[#F4F4F4] m-4 rounded-xl'>
                {token !== null && !isLoading &&
                <div className='flex justify-end items-end space-x-2'>
                    <img className="object-cover w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png" alt="edit" />
                    <img className="object-cover w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete" />
                </div>
                }
                <img className="h-auto w-auto object-cover" src={props.image} alt="Logo" />
                <div className=" font-semibold text-black text-lg mt-4 2xl:text-2xl mb-2">
                    <p className='text-start'>{props?.question}</p>
                </div>
                <p className='text-start font-normal text-base leading-7 '>{props?.answer}</p>
            </div>
        </Fragment>
    )
}

export default BlogPreview