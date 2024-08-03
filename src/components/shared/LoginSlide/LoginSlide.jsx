import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../../Pages/Login/LoginForm/LoginForm";
import LoginText from "../../../Pages/Login/LoginText/LoginText";

const LoginSlide = () => {
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
            <p>Sign In</p>
            <p className="text-white">to view all the massage therapists</p>
            </div>
                    </div>
                    <LoginForm />
                    </> : <LoginText />
                }
            </div>
            <div className={isVisible ? 'hidden md:block' : 'md:w-96 mx-auto text-center text-xl font-semibold p-8 bg-[#152A16] bg-opacity-10 rounded-lg'}>
              {/* button for xl device */}
            <Link to='/login' onClick={handleClick} className="text-blue-500 hover:underline hidden md:block">Sign In</Link>
            {/* button for sm device */}
            <button onClick={handleClick} className="text-blue-500 hover:underline md:hidden">Sign In</button>
            <p className="text-white">to view all the massage therapists</p>
        </div>
        </div>
    );
};

export default LoginSlide;