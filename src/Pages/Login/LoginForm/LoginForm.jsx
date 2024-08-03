import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import LoginText from "../LoginText/LoginText";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const LoginForm = () => {
    const {createUser} = useAuth()
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const from = '/';

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data
    createUser(email, password)
        .then(result => {
            console.log(result.user);
            const newUser = result.user
            if(newUser){
              navigate(from)
              toast.success('Signed In Successfully!')
            }
        })
        .catch(error => {
            console.error(error)
        })
}
    return (
        <div className="w-full">
          {/* register heading */}
          <div className="hidden md:block">
          <LoginText />
          </div>
          {/* register form fields */}
            <div className="rounded-t-3xl bg-white p-4">
              <div className="md:hidden my-6">
              <h2 className="text-center text-3xl font-semibold mb-2 ">Log In To Your Account</h2>
              <p className="leading-7 text-[#5C635A] text-sm">Welcome Back! Select a method to log in:</p>
              </div>
            {/* google & fb button */}
            <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-5 py-2 rounded-lg shadow-lg bg-gradient-to-r from-[#E4E4E4] to-[white]">
                    <FcGoogle /> Google
                </button>

                <button className="flex items-center gap-2 px-5 py-2 rounded-lg text-white bg-blue-500">
                    <FaFacebookF /> Facebook
                </button>
            </div>
            <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-[#5C635A]">Or Continue with Email</span>
            <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
              {/* email field */}
              <div className="space-y-4 my-6">
              <label className="font-medium">Email</label>
            <input {...register("email", { required: true })} 
            type="email" 
            placeholder="Enter your email" 
            className="border w-full rounded-lg px-3 py-4" />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              {/* password field */}
              <div className="relative space-y-4 my-6">
              <label className="font-medium">Password</label>
            <input {...register("password", { required: true })} 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Enter your password" 
            className="border w-full rounded-lg px-3 py-4" />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
            <button onClick={() => setShowPassword((value) => !value)} className="absolute top-1/2 right-3 transform -translate-y-1/2 ">
            {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
              </div>
              {/* remember & forget pass */}
              <div className="flex items-center justify-between text-sm">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="text-xl"/>
                <p className="text-[#5C635A]">Remember me</p>
              </div>
              <p className="text-blue-500 underline">Forgot password</p>
              </div>
              {/* submit btn */}
              <div className="w-2/3 mx-auto mt-6 mb-2">
                <button type="submit" className="bg-blue-500 w-full rounded-lg px-3 py-4 text-white mb-3" >Sign in</button>
                <p>Don’t Have an Account? <Link to='/register' className="text-blue-500 underline font-medium">Create Account</Link></p>
              </div>
            </form>
            </div>
        </div>
    );
};

export default LoginForm;