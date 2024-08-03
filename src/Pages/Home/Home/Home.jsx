import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="hidden md:block w-60 min-h-screen h-full border-x-2">
                <Sidebar />
            </div>

            {/* home content */}
            <div className="flex-grow">
            <NavBar />

            {/* home body */}
            <div className="bg-[#EEF2F5] w-full h-full">
            
            </div>
            </div>

        </div>
    );
};

export default Home;