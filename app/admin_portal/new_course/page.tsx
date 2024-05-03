"use client";
import React from "react";
import { useState } from "react";

function Page() {
  const [values, setValues] = useState({
    coursetitle: "",
    unit: "",
    coursecode: "",
    level: "",
    lecturer: "",
  });
  const [button, setButton] = useState("create course");
  const getHandler = (name: any) => {
    return (event: any) => {
      setButton("create course");

      setValues({ ...values, [name]: event.target.value });
      console.log(values);
    };
  };

  const handleSubmit = async (data: any) => {
    data.preventDefault();
    setButton("loading...");

    try {
      const response = await fetch("/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        setValues({
          coursetitle: "",
          unit: "",
          coursecode: "",
          level: "",
          lecturer: "",
        });
        setButton("created Successful");
      }
    } catch (error: any) {
      console.error("Registration Failed:", error);
      setButton("failed, try again");
    }
  };
  return (
    <div className='p-5 min-h-screen'>
      <form onSubmit={(e) => handleSubmit(e)} className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='coursetitle'>
              Course Title
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='coursetitle'
              value={values.coursetitle}
              onChange={getHandler("coursetitle")}
              onBlur={getHandler("coursetitle")}
              type='text'
              placeholder='communication and networking'
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='coursecode'>
              course code
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='coursecode'
              value={values.coursecode}
              onChange={getHandler("coursecode")}
              onBlur={getHandler("coursecode")}
              type='text'
              placeholder='COM 101'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='unit'>
              Unit
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='unit'
              value={values.unit}
              onChange={getHandler("unit")}
              onBlur={getHandler("unit")}
              type='text'
              placeholder='3'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='level'>
              level
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='level'
              value={values.level}
              onChange={getHandler("level")}
              onBlur={getHandler("level")}
              type='text'
              placeholder='100'
              required
            />
          </div>

          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='lecturer'>
              lecturer
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='lecturer'
              value={values.lecturer}
              onChange={getHandler("lecturer")}
              onBlur={getHandler("lecturer")}
              type='text'
              placeholder='John Doe'
              required
            />
          </div>
        </div>
        <button
          className='bg-blue-500 capitalize hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'>
          {button}
        </button>
      </form>
    </div>
  );
}

export default Page;
