"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
export default function Home() {
  const [courses, setCourse] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/course/get_all_course");
      const data = await response.json();
      setCourse(data);
    };
    fetchPosts();
  }, [boolean]);

  const handleDelete = async (userId: any) => {
    await fetch(`/api/course/${userId}`);
    setBoolean(!boolean);
  };

  return (
    <div className='min-h-screen p-5 mr-10'>
      <table>
        <tr>
          <th>course title</th>
          <th>course code</th>
          <th>unit</th>
          <th>level</th>
          <th>lecturer</th>
        </tr>
        {courses.map((course: any, index: number) => (
          <tr key={index} className='relative'>
            <td>{course.coursetitle}</td>
            <td>{course.coursecode}</td>
            <td>{course.unit}</td>
            <td>{course.level}</td>
            <td>{course.lecturer}</td>
            <div
              onClick={() => handleDelete(course._id)}
              className='absolute text-red-500 cursor-pointer top-[10%] left-[102%] text-3xl flex items-center justify-center'>
              <MdOutlineDelete />
            </div>
          </tr>
        ))}
      </table>
    </div>
  );
}
