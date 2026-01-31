import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { backgroundImg } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = () => {
    //form validation
    const nameValue = isSignIn ? null : name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidate(emailValue, passwordValue, nameValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Signed up
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src={backgroundImg}
            alt="backgroundimg"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black/70 my-40 mx-auto right-0 left-0 text-white rounded-lg "
        >
          <h1 className="font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="name"
              placeholder="Enter Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Enter Email"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-bold text-red-500">{errorMessage}</p>
          <button
            className="p-4 my-2 bg-red-700 w-full rounded-lg cursor-pointer"
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
