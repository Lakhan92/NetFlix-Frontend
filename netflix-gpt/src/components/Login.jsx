import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = () => {
    alert("Form has been submitted");
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_large.jpg"
            alt="backgroundimg"
          />
        </div>
        <form className="w-3/12 absolute p-12 bg-black/70 my-40 mx-auto right-0 left-0 text-white rounded-lg ">
          <h1 className="font-bold text-3xl">
            {" "}
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="name"
              placeholder="Enter Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            type="text"
            placeholder="Enter Email"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button
            className="p-4 my-2 bg-red-700 w-full rounded-lg"
            type="submit"
            onClick={() => handleFormSubmit()}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="p-4 text-sm cursor-pointer"
            onClick={() => handleSignUp()}
          >
            {isSignIn
              ? "New to netflix? Sign Up Now"
              : "Already Registered..Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
