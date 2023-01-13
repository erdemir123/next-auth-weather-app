"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation'


const Login = () => {
  const {data:session}=useSession()
  const router = useRouter()
  const handlelogin = (e) => {
    e.preventDefault();
    console.log(session.user.email);
  };


  const handleRegister = (e) => {
    e.preventDefault();
    signIn()
  };
  return (
    <div className="w-[100%] mx-4 mt-14">
       <img
          src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80'
          className='w-full h-full absolute top-0 -z-10 left-0'
        />
      <div>
        <form>
          <div className="flex flex-row items-center justify-center ">
            <p className="text-lg mb-0 mr-4">Sign in with</p>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              onClick={handleRegister}
            >
              {/* Facebook */}
              <svg width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M128 228a100 100 0 1 1 70.7-170.7a12 12 0 0 1 0 17a12.2 12.2 0 0 1-17 0A75.2 75.2 0 0 0 128 52a76 76 0 1 0 75.1 88H128a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12a100.2 100.2 0 0 1-100 100Z"/></svg>
            </button>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
              {/* Twitter */}
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
            </button>
            
          </div>
          
          
          </form>
        </div>
        </div>

  )
};

export default Login;
