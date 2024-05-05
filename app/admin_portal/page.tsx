"use client";
import Image from "next/image";
import Link from "next/link";
import empty from "@/public/empty-box.png";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
export default function Home() {
  const [courses, setCourse] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/course/get_all_course", {
        cache: "no-store",
      });
      const data = await response.json();
      setCourse(data);
    };
    fetchPosts();
  }, [boolean]);

  const handleDelete = async (userId: any) => {
    await fetch(`/api/course/${userId}`, { cache: "no-store" });
    setBoolean(!boolean);
    setCourse(courses);
  };

  return (
    <div className='min-h-screen p-5 overflow-auto'>
      {courses.length > 0 ? (
        <table className='w-full overflow-auto mr-10'>
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
      ) : (
        <div className='flex flex-col justify-between items-center gap-5'>
          <h3>
            You have no available courses please go to{" "}
            <Link className='text-cyan-500' href='/admin_portal/new_course'>
              + Add new course
            </Link>{" "}
            to add new courses that would be displayed here
          </h3>
          <Image
            src={empty}
            alt='empty box indicating empty courses'
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
}
