import React from "react";
import Image from "next/image";
import Logo from "../public/logo.jpeg";
import Link from "next/link";
function Nav() {
  return (
    <div className='flex justify-between bg-white items-center w-full p-3'>
      <Image
        src={Logo}
        // width={300}
        // height={300}
        className='w-[150px] md:w-[300px]'
        alt='estam formation university logo'
      />
      <div className=' flex gap-3 text-xs md:text-sm text-white'>
        <p className='p-2 bg-cyan-500 rounded cursor-pointer'>
          {" "}
          <Link href='/'>Home</Link>
        </p>
        <p className='p-2 bg-cyan-500 rounded cursor-pointer'>
          {" "}
          <Link href='/admin_login'>Admin login</Link>
        </p>
      </div>
    </div>
  );
}

export default Nav;
