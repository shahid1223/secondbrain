import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-white shadow mt-8">
      {/* laptop footer */}
      <div className="hidden md:block">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex flex-row">
            <div className="flex-shrink-0 px-3">
              <img
                className="h-auto w-auto block rounded-md text-base font-medium text-gray-900"
                src="../assets/iconsandlogo/logo.png"
                alt="Logo"
              />
            </div>

            <div className="flex">
              <div className={`flex`}>
                <div className="pt-2 pb-3 space-y-1 px-3">
                  <p className="text-lg font-bold">Comany</p>
                  <div className="flex items-center">
                    <Link
                      to="/"
                      className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
                    >
                      Home
                    </Link>
                  </div>
                  <div className=" flex items-center">
                    <Link
                      to="/aboutus"
                      className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className=" flex items-center">
                    <Link
                      to="/blog"
                      className="hover:bg-gray-100 py-2 rounded-md text-sm font-medium text-gray-900"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
                <div className="pt-2 pb-3 space-y-1 px-3">
                  <p className="text-lg font-bold">Contact</p>
                  <div className="flex items-center">
                    <Link
                      to="/"
                      className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
                    >
                      secondbrainapp@gmail.com
                    </Link>
                  </div>
                  <div className=" flex items-center">
                    <Link
                      to="/aboutus"
                      className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
                    >
                      +91 9995555555
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-baseline">
            <div className="flex items-baseline space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
                  src="../assets/iconsandlogo/mdi_instagram.png"
                  alt="Logo"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
                  src="../assets/iconsandlogo/ic_baseline-facebook.png"
                  alt="Logo"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
                  src="../assets/iconsandlogo/jam_linkedin-square.png"
                  alt="Logo"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
                  src="../assets/iconsandlogo/ph_twitter-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="flex-shrink-0 px-3">
              <p className="text-lg font-bold">Download App</p>
              <img
                className="h-auto mb-8 w-auto block  py-2 rounded-md text-base font-medium text-gray-900"
                src="../assets/iconsandlogo/Group.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden flex`}>
        <div className="pt-2 pb-3 space-y-1 px-3">
          <p className="text-lg font-bold">Comany</p>
          <div className="flex items-center">
            <Link
              to="/"
              className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
            >
              Home
            </Link>
          </div>
          <div className=" flex items-center">
            <Link
              to="/aboutus"
              className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
            >
              About Us
            </Link>
          </div>
          <div className=" flex items-center">
            <Link
              to="/blog"
              className="hover:bg-gray-100 py-2 rounded-md text-sm font-medium text-gray-900"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="pt-2 pb-3 space-y-1 px-3">
          <p className="text-lg font-bold">Contact</p>
          <div className="flex items-center">
            <Link
              to="/"
              className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
            >
              secondbrainapp@gmail.com
            </Link>
          </div>
          <div className=" flex items-center">
            <Link
              to="/aboutus"
              className="hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-900"
            >
              +91 9995555555
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-baseline">
        <div className="flex items-baseline space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
              src="../assets/iconsandlogo/mdi_instagram.png"
              alt="Logo"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
              src="../assets/iconsandlogo/ic_baseline-facebook.png"
              alt="Logo"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
              src="../assets/iconsandlogo/jam_linkedin-square.png"
              alt="Logo"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-auto w-auto block px-3 py-2 rounded-md text-base font-medium text-gray-900"
              src="../assets/iconsandlogo/ph_twitter-logo.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex-shrink-0 px-3">
          <p className="text-lg font-bold">Download App</p>
          <img
            className="h-auto mb-8 w-auto block  py-2 rounded-md text-base font-medium text-gray-900"
            src="../assets/iconsandlogo/Group.png"
            alt="Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
