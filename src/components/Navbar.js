import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../states/auth/authSlice";

function Navbar() {

  const dispatch = useDispatch();
  const redirect = useNavigate();

  const authenicated = useSelector(state => state.auth);
  const { isAuthenticated, token, loading } = authenicated;

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const pathArr = [
    {
      name: "Home",
      pathName: "/"
    },
    {
      name: "About us",
      pathName: "/aboutus"
    },
    {
      name: "Blog",
      pathName: "/blog"
    },
  ];


  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-auto w-auto" src="/assets/iconsandlogo/Logo.svg" alt="Logo_navbar" />
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4 ">
              <div>
                {pathArr.map((data, index) => {
                  return (
                    <Link key={index} to={data.pathName} className={` px-3 py-2 rounded-md hover:text-[#0054B4] focus:text-[#0054B4] text-sm font-medium ${location.pathname.split("/").pop() === data.pathName.split("/").pop() ? "text-[#0054B4] underline underline-offset-8" : ""} text-gray-900`}>{data.name}</Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Download App
            </button>
            {isAuthenticated && token !== null && !loading &&
              <>
                <button className="m-4 bg-[#0054B4] text-left hover:bg-blue-700 text-white py-2 px-4 rounded-lg" onClick={() => redirect('/addblog')}>
                  New Blog
                </button>
                <button className="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 rounded-lg ml-4" onClick={() => dispatch(logout())}>
                  Logout
                </button>
              </>
            }
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* X icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

          <div className=" flex items-center">

            <div className='bg-blue-400 w-2 h-8'></div>
            <Link to="/" className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Home</Link>
          </div>
          <div className=" flex items-center">
            <div className='bg-blue-400 w-2 h-8'></div>
            <Link to="/aboutus" className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900">About Us</Link>
          </div>
          <div className=" flex items-center">
            <div className='bg-blue-400 w-2 h-8'></div>
            <Link to="/blog" className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Blog</Link>
          </div>
          <div className="flex-shrink-0">
            <img className="h-auto mt-8 mb-8 w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900" src="/assets/iconsandlogo/Group.png" alt="Logo" />
          </div>
          <div className="flex items-baseline space-x-4">
            <div className="flex-shrink-0">
              <img className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900" src="/assets/iconsandlogo/mdi_instagram.png" alt="Logo" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900" src="/assets/iconsandlogo/ic_baseline-facebook.png" alt="Logo" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900" src="/assets/iconsandlogo/jam_linkedin-square.png" alt="Logo" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900" src="/assets/iconsandlogo/ph_twitter-logo.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
