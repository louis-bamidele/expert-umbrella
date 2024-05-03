"use client";
import React from "react";
import { useState } from "react";

function Page() {
  const [values, setValues] = useState({
    username: "",
    lastname: "",
    firstname: "",
    password: "",
    title: "",
  });

  const getHandler = (name: any) => {
    return (event: any) => {
      setValues({ ...values, [name]: event.target.value });
      console.log(values);
    };
  };

  const handleSubmit = async (data: any) => {
    data.preventDefault();
    console.log("Submitting form", values);

    //  const { username, password } = data;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log(data);
      console.log("Registration Successful", response);
    } catch (error: any) {
      console.error("Registration Failed:", error);
    }
  };

  return (
    <div className='p-5 min-h-screen'>
      <form onSubmit={(e) => handleSubmit(e)} className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='username'>
              User Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='username'
              onChange={getHandler("username")}
              onBlur={getHandler("username")}
              type='text'
              placeholder='mr_sharp_guy'
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='firstname'>
              first name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='firstname'
              onChange={getHandler("firstname")}
              onBlur={getHandler("firstname")}
              type='text'
              placeholder='Bamidele'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='lastname'>
              last name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='lastname'
              onChange={getHandler("lastname")}
              onBlur={getHandler("lastname")}
              type='text'
              placeholder='Akingboye'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='password'>
              password
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='password'
              onChange={getHandler("password")}
              onBlur={getHandler("password")}
              type='text'
              placeholder='*********'
            />
          </div>

          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='title'>
              title
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='title'
              onChange={getHandler("title")}
              onBlur={getHandler("title")}
              type='text'
              placeholder='mr/mrs'
            />
          </div>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'>
          Create new lecturer profile
        </button>
      </form>
    </div>
  );
}

export default Page;
