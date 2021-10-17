import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/solid'
import Logged from './auth/Logged'
import NotConnected from './auth/NotConnected'

function Header () {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl items-center lg:mx-auto h-auto mt-2 mx-8">
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
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-white focus:border-gray-500"
            type="text"
            placeholder="Search"
          />
        </div>


        {/* Right */}
        {/* <Logged /> */}
        <NotConnected />

      </div>
    </div>
  )
}

export default Header