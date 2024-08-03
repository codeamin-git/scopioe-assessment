import { useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { HiBars3BottomRight, HiOutlineBell } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import useAuth from '../../../hooks/useAuth';
import SidebarRoutes from '../../../components/shared/SidebarRoutes/SidebarRoutes';

const NavBar = () => {
    const {user, logout} = useAuth()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout()
  }
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4  border-b-2">
        {/* nav start */}
      <div>
        {/* logo */}
        <div className="md:hidden flex gap-2 items-center justify-center md:justify-start">
              <img src="/therapy.png" alt="" className="hidden md:block md:w-10" />
              <h2 className="text-blue-500 text-2xl md:text-4xl">Scopioe Cure</h2>
            </div>
            {/* user info for large device */}
      <div className='hidden md:block'>
      <div className="flex items-center">
        <img
          src={user?.photoURL || 'https://i.ibb.co/jfh0wHX/user-logo.png'}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">{user?.displayName}</p>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
      </div>
      </div>
      </div>
      {/* nav end for large device */}
      <div className="hidden md:flex items-center space-x-4">
      <button className='rounded-full border p-1'><HiOutlineBell className='text-2xl' /></button>
        <button onClick={handleLogout} className="px-4 py-2 text-red-500 flex items-center gap-2 border-l-2">Log Out <span className='rounded-full p-1 border bg-red-200 '><CiLogin className='rounded-full text-2xl' /></span></button>
      </div>
      <div className="md:hidden flex items-center gap-2">
      <button><HiOutlineBell className='text-2xl' /></button>
        <button onClick={toggleSidebar} className="">
        <HiBars3BottomRight className='text-3xl'/>
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 md:hidden">
          <div className="absolute right-0 top-0 w-2/3 bg-white text-black">
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 focus:outline-none"
            >
              <TfiClose />
            </button>

            {/* sidebar for small device */}
            <div className="mt-10">
                {/* user info */}
            <div className="flex flex-col items-end justify-end text-right bg-blue-500 h-36 pb-4 pr-2 text-white">
        <img
          src={user?.photoURL || 'https://i.ibb.co/jfh0wHX/user-logo.png'}
          alt="User"
          className="w-10 h-10 rounded-full mb-3"
        />
        <div className="ml-4">
          <p className="font-semibold">{user?.displayName}</p>
          <p className="text-sm text-black">{user?.email}</p>
        </div>
      </div>
                {/* sidebar routes */}
              <SidebarRoutes />

              <div className="mt-8">
              <button onClick={handleLogout} className="px-4 py-2 text-red-500 flex items-center gap-2 border-l-2">Log Out <span className='rounded-full p-1 border bg-red-200 '><CiLogin className='rounded-full text-2xl' /></span></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
