import Image from "next/image";
import Logo from "../public/logo.jpeg";
import Link from "next/link";
export default function Home() {
  return (
    <main className=' min-h-screen w-screen  bg-white text-black'>
      <div className='flex flex-col gap-2 justify-center items-center p-10 pt-24'>
        <h2 className='text-lg md:text-2xl uppercase text-center '>
          course allocation system
        </h2>
        <p className='text-center text-sm'>
          this is a course allocation website, this website help allocate
          courses to lecturer
        </p>
        <button
          className='px-3 text-white py-2 mt-7 bg-cyan-500 rounded'
          type='button'>
          <Link href='/login'> Login</Link>
        </button>
      </div>
    </main>
  );
}
