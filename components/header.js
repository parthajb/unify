import Link from 'next/link'
import { useState } from 'react';
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import Logo from './logo'


export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
    <header className="z-30 fixed w-full top-0 left-0 bg-white backdrop-filter backdrop-blur-sm bg-opacity-80 py-2 antialiased">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <button className="focus:outline-none" onClick={handleClick}>
            {
            active ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />
            }
            </button>
            <Link href="/">
              <a className="ml-4 text-gray-800 font-serif text-lg font-bold hover:text-gray-900"><Logo version='#151540' /></a>
            </Link>
          </div>
          <div className="">
            <Link href="/">
              <a className="text-haiti-500 text-base ml-0 md:ml-10 py-4 block md:inline-block text-center hover:text-haiti-200">Login</a>
            </Link>
          </div>

          {
          active ? 
          <div className={`transition duration-500 ease-in-out fixed inset-0 h-screen w-screen`}>
            <div className="fixed inset-0 h-screen w-screen bg-white antialiased backdrop-filter backdrop-blur-sm bg-opacity-80" onClick={handleClick}></div>
            <div className={`${
            active ? 'translate-x-0 shadow-xl' : '-translate-x-full'
          } transition-transform transform w-8/12 md:w-96 bg-white h-full relative py-20`}>
              <button className="absolute right-4 top-4 focus:outline-none" onClick={handleClick}>
              {
              active ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />
              }
              </button>

              <Link href="/">
                <a className="px-12 md:px-20 text-gray-700 text-base py-4 block hover:bg-gray-50">Home</a>
              </Link>

              <Link href="/services">
                <a className="px-12 md:px-20 text-gray-700 text-base py-4 block hover:bg-gray-50">Services</a>
              </Link>
            </div>
          </div>
          : <></>
          }
        </div>
      </div>
      
    </header>
    </>
  )
}