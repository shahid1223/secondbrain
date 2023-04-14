import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlogById } from '../../../states/blog/blogSlice';
import { useNavigate, createSearchParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

const BlogPreview = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const authenicated = useSelector(state => state.auth);
    const { isAuthenticated, token, loading } = authenicated;

    return (
        <Fragment>
            <div>
                {isAuthenticated && token !== null && !loading &&
                    <div className='flex justify-end items-end space-x-2 m-4 -mb-6'>
                        <img className="object-cover w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png" alt="edit" onClick={() => {
                            navigate({
                                pathname: '/addblog',
                                search: createSearchParams({
                                    id: props.id
                                }).toString()
                            })
                        }} />
                        <img className="object-cover w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete" onClick={() => dispatch(deleteBlogById(props.id))} />
                    </div>
                }

                <div className='flex flex-col py-4 px-4 mt-8 mb-8 bg-[#F4F4F4] m-4 rounded-xl' onClick={() => {
                    navigate({
                        pathname: '/singleblog',
                        search: createSearchParams({
                            id: props.id
                        }).toString()
                    })
                }}>
                    {/* {isAuthenticated && token !== null && !loading &&
                    <div className='flex justify-end items-end space-x-2 mb-2'>
                        <img className="object-cover w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png" alt="edit" onClick={() => {
                            navigate({
                                pathname: '/addblog',
                                search: createSearchParams({
                                    id: props.id
                                }).toString()
                            })
                        }} />
                        <img className="object-cover w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete" onClick={() => dispatch(deleteBlogById(props.id))} />
                    </div>
                } */}
                    <img className="h-auto w-auto object-cover" src={props.image} alt="Logo" />
                    <div className=" font-semibold text-black text-lg mt-4 2xl:text-2xl mb-2">
                        <p className='text-start'>{props?.question}</p>
                    </div>
                    {/* <p className='text-start font-normal text-base leading-7 '>{props?.answer}</p> */}
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props?.answer) }}></div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogPreview