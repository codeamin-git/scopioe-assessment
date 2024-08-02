/* eslint-disable react/no-unescaped-entities */

const RegisterText = () => {
    return (
          <div className="mb-8">
            {/* logo */}
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <img src="/therapy.png" alt="" className="w-10" />
              <h2 className="text-blue-500 text-4xl">Scopioe Cure</h2>
            </div>
            <div className="text-center p-2 md:text-start">
              <h3 className="font-semibold text-2xl mt-6 mb-3">Sign In To Your Account</h3>
            <p className="leading-7 text-[#5C635A]">Welcome Back! By click the sign up button, you're agree 
            to
            Scopioe Cure Terms and Service and acknlowledge the <br />
            <span className="text-blue-500 underline"> Privacy and Policy</span></p>
            </div>
        </div>
    );
};

export default RegisterText;