import { useState } from "react";
import RegisterText from "../../../Pages/Register/RegisterText/RegisterText";
import RegisterFrom from "../../../Pages/Register/RegisterForm/RegisterFrom";
import { Link } from "react-router-dom";

const RegisterSlide = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

    return (
        <div className="flex flex-col items-center gap-8 md:justify-center h-screen">
            <div className="md:hidden mt-10 w-full">
                {
                    isVisible ? <>
                    <div>
                        {/* logo */}
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <img src="/therapy.png" alt="" className="w-10" />
              <h2 className="text-blue-500 text-4xl">Scopioe Cure</h2>
            </div>
            <div className="text-center text-white my-4">
            <p>Create Account</p>
            <p className="text-white">Fill in Your Information</p>
            </div>
                    </div>
                    <RegisterFrom />
                    </> : <RegisterText />
                }
            </div>
            <div className={isVisible ? 'hidden md:block' : 'md:w-96 mx-auto text-center text-xl font-semibold p-8 bg-[#152A16] bg-opacity-10 rounded-lg'}>
            <Link onClick={handleClick} className="text-blue-500 hover:underline">Create Account</Link>
            <p className="text-white">Fill in Your Information</p>
        </div>
        </div>
    );
};

export default RegisterSlide;