import React, { useRef, useState } from 'react';
import { useAuth } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import Header from './Header';
import checkValidate from '../utils/validate';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { login, user } = useAuth();
  const [isSignForm, setIsSignForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonclick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignForm) {
      // Sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          login(userCredential); // Update user state
          console.log("user", userCredential.user);
        })
        .catch((error) => {
          setErrorMessage("User already registered");
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          login(userCredential); // Update user state
          console.log("Logged in user:", userCredential.user);
        })
        .catch((error) => {
          setErrorMessage("User not found");
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  if (user) {
    return <Navigate to="/browse" />;
  }

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black">
     
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-75 p-8 rounded-md w-3/12 text-white">
          <h1 className="font-bold text-3xl italic py-4 text-white">{isSignForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignForm && <input type="text" placeholder="Full Name" className="bg-zinc-800 w-full p-2 mb-4 rounded" />}
          <input ref={email} type="text" placeholder="Email Address" className="bg-zinc-800 w-full p-2 mb-4 rounded" />
          <input ref={password} type="password" placeholder="Password" className="bg-zinc-800 w-full p-2 mb-4 rounded" />
          <p className='text-red-700 py-2 font-bold'>{errorMessage}</p>
          <button onClick={handleButtonclick} className="w-full p-4 bg-red-600 text-black rounded">{isSignForm ? "Sign In" : "Sign Up"}</button>
          <p className='px-2 py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignForm ? "New to Netflix? Sign Up" : "Already registered? Sign In"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
