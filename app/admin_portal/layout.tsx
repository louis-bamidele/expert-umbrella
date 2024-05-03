import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=' min-h-screen bg-white text-black'>
      <div className='flex'>
        <div className='p-5 flex flex-col justify-between bg-cyan-800 text-cyan-300'>
          <div>
            <h4 className='font-bold mb-5'>Dashboard</h4>

            <p className='pb-3 '>
              <Link href='/admin_portal/new_course'>+ Add new course</Link>
            </p>
            <p className='pb-3 '>
              <Link href='/admin_portal/new_lecturer'>+ Add new lecturer</Link>
            </p>
            <p className='pb-3 '>
              <Link href='/admin_portal'>view all courses</Link>
            </p>
          </div>
          <p className='p-2 bg-cyan-500 text-cyan-100 shadow w-fit rounded'>
            logout
          </p>
        </div>
        <div className=''>{children}</div>
      </div>
    </main>
  );
}
