import { BsExclamationSquare } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5';
import { SlPeople } from 'react-icons/sl';

const SidebarRoutes = () => {
    return (
        <div>
            <ul className="mt-4 space-y-2">
                <li className='flex items-center gap-4 hover:bg-blue-200 hover:border-l-4 border-black px-4 py-2'>
                <HiOutlineSquares2X2 /> Home
                </li>
                <li className='flex items-center gap-4 hover:bg-blue-200 hover:border-l-4 border-black px-4 py-2'>
                <SlPeople /> New Listing
                </li>
                <li className='flex items-center gap-4 hover:bg-blue-200 hover:border-l-4 border-black px-4 py-2'>
                <CiSearch /> Search
                </li>
                <li className='flex items-center gap-4 hover:bg-blue-200 hover:border-l-4 border-black px-4 py-2'>
                <IoDocumentTextOutline /> About
                </li>
                <li className='flex items-center gap-4 hover:bg-blue-200 hover:border-l-4 border-black px-4 py-2'>
                <GrFavorite /> Favorites
                </li>

                {/* divider */}
                <div>
                <div className="flex items-center my-4 px-3">
            <div className="flex-grow border-t border-gray-200"></div>
            </div>
                </div>

                <li className='flex items-center gap-4 hover:bg-blue-200 hover:border-l-4 border-black px-4 py-2'>
                <BsExclamationSquare /> Help Center
                </li>
                <li className='flex items-center gap-4 hover:bg-blue-200 hover:border-l-4 border-black px-4 py-2'>
                <IoSettingsOutline /> Settings
                </li>
              </ul>
        </div>
    );
};

export default SidebarRoutes;