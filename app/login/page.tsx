"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
export default function Home() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const getHandler = (name: any) => {
    return (event: any) => {
      setUser({ ...user, [name]: event.target.value });
      console.log(user);
    };
  };
  const router = useRouter();
  const handleSubmit = async (data: any) => {
    data.preventDefault();
    console.log("Submitting form", user);
    if (user.username == "admin") {
      if (user.password == "1234") {
        router.push("/admin_portal");
      }
    } else {
      setError("incorrect username or password");
    }
  };

  return (
    <main className=' min-h-screen flex flex-col justify-center items-center bg-orange-400 text-black'>
      <h1 className='mb-7'>FCVAC Course Allocation System</h1>
      <div className='w-full max-w-xs '>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p className='text-cyan-700 text-sm my-3'>
            Please enter username and password.
          </p>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'>
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              onChange={getHandler("username")}
              onBlur={getHandler("username")}
              type='text'
              placeholder='Username'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              onChange={getHandler("password")}
              onBlur={getHandler("password")}
              placeholder='******************'
            />
          </div>
          <div className='flex flex-col items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'>
              Sign In
            </button>
            <p className='text-red-500'>{error}</p>
          </div>
        </form>
      </div>
    </main>
  );
}
