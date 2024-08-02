import AuthBanner from "../../../components/shared/AuthBanner/AuthBanner";
import RegisterFrom from "../RegisterForm/RegisterFrom";

const Register = () => {
    
    return (
        <div className="flex flex-col lg:flex-row w-full lg:p-24 lg:gap-28 bg-[url('https://i.ibb.co/B2KX559/banner-2.jpg')] bg-center bg-cover md:bg-none min-h-screen">
            
            {/* register form */}
            <div className="hidden md:block lg:w-1/2">
            <RegisterFrom />
            </div>

            {/* register banner */}
            <div className="bg-none md:bg-[url('https://i.ibb.co/0sbGCyp/banner-1.jpg')] bg-contain bg-no-repeat rounded-xl lg:w-1/2">
            <AuthBanner />
            </div>
        </div>
    );
};

export default Register;