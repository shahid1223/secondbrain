import React, { Fragment, useContext } from 'react';
import secondBrainContext from '../../context/Context'

const Login = () => {

  const auth = useContext(secondBrainContext);

  const { email, password, onChange, login } = auth;

  return (
    <Fragment>
      <div className="flex justify-center items-center flex-col text-gray-600 body-font">
        {/* <section className="text-gray-600 body-font"> */}
        <div className="container px-5 py-24 mx-auto flex justify-center items-center">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0  z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">Admin</h2>
            <div className=" mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" required onChange={onChange} defaultValue={email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className=" mb-4">
              <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="password" name="password" required onChange={onChange} defaultValue={password} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={login}>Login</button>
            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
        {/* </section> */}
      </div>
    </Fragment>
  )
}

export default Login