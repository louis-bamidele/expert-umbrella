"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
export default function Home() {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/course/get_all_course");
      const data = await response.json();
      setCourse(data);
      console.log(data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (userId: any) => {
    const response = await fetch(`/api/course/${userId}`);
    // const data = await response.json();
    console.log(userId);
    // console.log(data);
  };

  return (
    <div className='min-h-screen p-5'>
      <table>
        <tr>
          <th>course title</th>
          <th>course code</th>
          <th>unit</th>
          <th>level</th>
          <th>lecturer</th>
        </tr>
        {courses.map((course: any, index: number) => (
          <tr key={index}>
            <td>{course.coursetitle}</td>
            <td>{course.coursecode}</td>
            <td>{course.unit}</td>
            <td>{course.level}</td>
            <td>{course.lecturer}</td>
            <div
              onClick={() => handleDelete(course._id)}
              className='text-red-500 text-4xl flex items-center justify-center'>
              <MdOutlineDelete />
            </div>
          </tr>
        ))}
      </table>
    </div>
  );
}
