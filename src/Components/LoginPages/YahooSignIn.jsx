import React from 'react';
import Yahoo from "./Assets/Yahoo.svg";
import background from "./Assets/background.jpg";
import { FcGoogle } from "react-icons/fc";

const YahooSignIn = () => {
  return (
    <>
      <div className="w-full h-20 flex justify-between items-center">
        <div>
          <img className="w-28 ms-14 cursor-pointer" src={Yahoo} alt="" />
        </div>
        <div>
          <a className="text-sm text-violet-600 pe-4 hover:text-violet-800" href="/">
            Help
          </a>
          <a className="text-sm text-purple-600 pe-4 hover:text-violet-800" href="/">
            Terms{" "}
          </a>
          <a className="text-sm text-purple-500 me-12 hover:text-violet-800" href="/">
            Privacy{" "}
          </a>
        </div>
      </div>
      <div
        className="flex justify-end"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "150vh",
        }}
      >
        <div className="me-2 xl:me-40 mt-3 rounded-2xl border bg-white h-2/3 static top-4 right-20 ">
          <div className="px-16">
            <div className="flex justify-center mb-4 px-16">
              <img className="w-24" src={Yahoo} alt="" />
            </div>
            <div className="flex flex-col justify-center mb-4">
              <h1 className="text-center text-xl font-bold text-gray-900">
                Sign in
              </h1>
              <p className="font-normal ">Sign in using your Yahoo account</p>
            </div>
          </div>
          <div className=" flex flex-col mt-20 px-8">
            <form className="flex flex-col  w-full  relative duration-200">
              <input
                className="w-full outline-none border-b-1 pb-2 focus:border-b-violet-500 peer "
                type="text"
              />
              <label
                className="absolute pointer-events-none text-base tracking-tighter bottom-2 text-gray-500 left-0 peer-focus:text-sm peer-focus:text-gray-950 peer-focus:-translate-y-6 transition-all"
              >
                Username,email or mobile
              </label>
            </form>
            <button className="self-center mt-6 py-2 w-72  rounded-full bg-violet-600 text-white text-lg font-semibold hover:bg-violet-900">
              Next
            </button>
            <div className="flex justify-between items-center mt-4">
              <span>
                <input
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                  type="checkbox"
                />{" "}
                <span className="ps-2 text-basse text-violet-700 tracking-tighter cursor-pointer">
                  Stay Signed in
                </span>
              </span>
              <span className="text-base text-violet-700 tracking-tighter cursor-pointer hover:text-violet-900">
                Forgetten Username?
              </span>
            </div>
           <div className='mt-4 '>
           <button className='w-full text-lg border-violet-600 border tracking-tighter py-2 rounded-full  text-violet-500 font-semibold hover:border-violet-700 hover:text-violet-700' >Create an account</button>
           <p className='text-center my-4'>or</p>
           <button className='w-full text-lg border-gray-400 border rounded-full flex items-center justify-center tracking-tighter font-semibold py-2 hover:border-gray-800 '><FcGoogle className='w-6 h-6' /><span className='ms-2'>Sign in with Google</span></button>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YahooSignIn;
