import { NavLink } from "react-router";
// import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="border-t-2">
      <div className=" flex justify-center items-center gap-2 text-4xl pb-4 mt-10 sm:mt-20">
        <h2 className="font-prata ">Login</h2>
        <hr className="w-[50px] h-[3px] bg-[#484848]" />
      </div>

      <div className="w-full flex flex-col gap-4 sm:w-1/2 sm:mx-auto lg:w-1/3">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="border border-black px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border border-black px-3 py-2 w-full"
          />
          <div className="flex justify-between items-center mt-2 text-sm sm:text-base">
            <NavLink to="/forgot-password">
              <p>Forgot your Password?</p>
            </NavLink>
            {/* <NavLink to="/signup">
              <p>Create an Account</p>
            </NavLink> */}
          </div>
        </div>
        <button className="border px-7 py-2 bg-black text-white m-4 w-fit mx-auto">
          Login
        </button>

        <div className="text-center">
          Don&apos;t have an account?{" "}
          <NavLink to="/signup" className="text-[#868686] underline">
            Signup
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;
