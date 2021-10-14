import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/solid'

function Header () {
  return (
    <div>
      <div className="flex justify-between max-w-6xl items-center mx-auto h-auto bg-red-500 mt-8">
        {/* Left */}
        <div className="w-24 h-auto relative hidden lg:flex cursor-pointer">
          <img src="https://logos-marques.com/wp-content/uploads/2020/09/Instagram-Logo.png"  alt=""/>
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search input field */}
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black"
            type="text"
            placeholder="Search"
          />
        </div>


        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          {/* Menu Button for Mobile screen */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:hidden cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          {/* Navbar button for Desktop screen */}
          <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default Header