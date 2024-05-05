"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
export default function Home() {
  const [lecturer, setLecturer] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/all_lecturer", { cache: "no-store" });
      const data = await response.json();
      setLecturer(data);
    };
    fetchPosts();
  }, [boolean]);

  const handleDelete = async (userId: any) => {
    await fetch(`/api/course/${userId}`);
    setBoolean(!boolean);
  };

  return (
    <div className='min-h-screen p-5 w-full overflow-auto'>
      <table className='w-full overflow-auto'>
        <tr>
          <th>username</th>
          <th>first name</th>
          <th>last name</th>
          <th>password</th>
          <th>title</th>
          <th>role</th>
        </tr>
        {lecturer.map((lecturer: any, index: number) => (
          <tr key={index}>
            <td>{lecturer.username}</td>
            <td>{lecturer.firstname}</td>
            <td>{lecturer.lastname}</td>
            <td>{lecturer.password}</td>
            <td>{lecturer.title}</td>
            <td>{lecturer.role}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
