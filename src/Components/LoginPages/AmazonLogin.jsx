import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
const AmazonLogin = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col h-screen items-center font-sans">
        <img
          className="text-center"
          src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg"
          alt="amazon-logo"
        />
        <div className="w-94">
          <div className="border pb-4 p-2 rounded-lg border-gray-300 flex flex-col">
            <div className="mb-3 px-5 pt-3 ">
              <h1 className="text-3xl font-medium mb-3">Sign In</h1>
              <label className="font-bold  text-sm" htmlFor="">
                Email or mobile phone number
              </label>
              <br />
              <input
                className="w-full h-8 rounded  border border-gray-500  focus:ring-4  focus:ring-cyan-700 focus:border-blue-500 focus:outline-gray-500 px-2 py-1 focus:transition-all "
                type="text"
              />
            </div>
            <div className="flex justify-center px-6 ">
              <button className="font-bold text-xs w-full py-2 rounded-full bg-yellow-300 hover:bg-yellow-400">
                Continue
              </button>
            </div>
            <div className="w-80 ps-6 mt-3">
              <p className="text-xs">
                By continuing, you agree to Amazons{" "}
                <a
                  className=" text-blue-600 underline hover:text-orange-700"
                  href="https://na.account.amazon.com/ap/lwa/agreement?agreementName=conditionsOfUse"
                >
                  Conditions of Use
                </a>{" "}
                and{" "}
                <a
                  className=" text-blue-600 underline hover:text-orange-700"
                  href="https://na.account.amazon.com/ap/lwa/agreement?agreementName=privacyNotice"
                >
                  Privacy Notice.
                </a>
              </p>
              <p className="flex items-center mt-4">
                <IoIosArrowDown />
                <span>
                  <a
                    className="text-sm text-blue-600 hover:text-orange-700 hover:underline"
                    href="/"
                  >
                    Need Help?
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6 w-full">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-xs text-gray-600">New to Amazon?</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-3">
            <button className="border border-gray-500 w-full rounded-full text-sm p-1 hover:bg-gray-50">
              Create Your Amazon Account
            </button>
          </div>
        </div>
        <hr className="mt-8 border-gray-300 w-full border" />
        <div className="mt-8 mx-auto flex ">
          <span>
            <a
              className="text-xs  text-blue-600 hover:text-orange-700 hover:underline"
              href="https://na.account.amazon.com/ap/lwa/agreement?agreementName=conditionsOfUse"
            >
              Conditions of Use
            </a>
          </span>
          <span>
            <a
              className="text-xs  text-blue-600 px-6 hover:text-orange-700 hover:underline"
              href="https://na.account.amazon.com/ap/lwa/agreement?agreementName=conditionsOfUse"
            >
              Privacy Notice
            </a>
          </span>
          <span>
            <a
              className="text-xs  text-blue-500 hover:text-orange-700 hover:underline"
              href="https://www.amazon.com/gp/help/customer/display.html?nodeId=G4CY3HAXTSFLGC22"
            >
              Help
            </a>
          </span>
        </div>
        <p className="text-center text-xs mt-3 text-gray-600">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </>
  );
};

export default AmazonLogin;
