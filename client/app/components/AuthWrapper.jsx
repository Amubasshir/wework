import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';

const AuthWrapper = () => {
  return (
    <div className="fixed top-0 z-[100]">
      <div
        className="h-[100vh] w-[100vw] backdrop-filter-md fixed top-0"
        id="blur-div"
      ></div>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
        <div
          className="fixed z-[101] bg-white flex flex-col justify-center items-center"
          id="auth-modal"
        >
          <div className="flex flex-col justify-center items-center p-8 gap-7">
            <h3 className="text-2xl font-semibold text-slate-700">
              Join Wework
            </h3>
            <div className="flex flex-col gap-5">
              <button className="text-white bg-[#5173b9] p-3 font-semibold w-80 rounded-md flex items-center justify-center relative">
                <MdFacebook className="absolute left-4 text-2xl" />
                Continue with Facebook
              </button>
              <button className="border border-slate-300 p-3 font-medium w-80 rounded-md flex items-center justify-center relative">
                <FcGoogle className="absolute left-4 text-2xl" />
                Continue with Google
              </button>
            </div>
            <div className="relative  w-full text-center">
              <span className="before:content-[''] before:h-[0.5px] before:w-80 before:absolute before:top-[50%] before:left-0 before:bg-slate-400">
                <span className="bg-white relative z-10 px-2">OR</span>
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-3 w-80"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md p-3 w-80"
              />
              <button className="bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-md p-3 w-80">
                Continue
              </button>
            </div>
          </div>
          <div className="py-5 w-full flex items-center justify-center border-t border-r-slate-500 ">
            <span className="text-sm font-medium text-slate-500">
              Not a member yet?
              <span className="text-[#1DBF73] cursor-pointer"> Join Now</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
