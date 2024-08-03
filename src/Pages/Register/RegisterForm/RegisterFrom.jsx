/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import RegisterText from "../RegisterText/RegisterText";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const RegisterFrom = () => {
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
          <RegisterText />
          </div>
          {/* register form fields */}
            <div className="rounded-t-3xl bg-white p-4">
              <h2 className="md:hidden text-center text-3xl font-semibold my-6 ">Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
              {/* name field */}
              <div className="space-y-4">
              <label className="font-medium">Name</label>
            <input {...register("name", { required: true })} 
            placeholder="@username" 
            className="border w-full rounded-lg px-3 py-4" />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
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
              {/* confirm password field */}
              <div className="relative space-y-4 mt-6 mb-3">
              <label className="font-medium">Confirm Password</label>
            <input {...register("rePass", { required: true })} 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Re-type password" 
            className="border w-full rounded-lg px-3 py-4" />
            {errors.rePass && <span className="text-red-500 text-sm">This field is required</span>}
            <button onClick={() => setShowPassword((value) => !value)} className="absolute top-1/2 right-3 transform -translate-y-1/2 ">
            {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
              </div>
              {/* terms */}
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="text-xl"/>
                <p className="text-blue-400">Accept Terms of Service</p>
              </div>
              {/* submit btn */}
              <div className="w-2/3 mx-auto mt-6 mb-2">
                <button type="submit" className="bg-blue-500 w-full rounded-lg px-3 py-4 text-white mb-3" >Sign up</button>
                <p>Already Have an Account? <Link to='/login' className="text-blue-500 underline font-medium">Log in</Link></p>
              </div>
            </form>
            </div>
        </div>
    );
};

export default RegisterFrom;