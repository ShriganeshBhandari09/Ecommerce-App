const ForgotPassword = () => {
  return (
    <div className="border-t-2 p-4">
      <div className=" flex justify-center items-center gap-2 text-4xl pb-4 mt-10 sm:mt-20">
        <h2 className="font-prata ">Forgot Password</h2>
        <hr className="w-[50px] h-[3px] bg-[#484848]" />
      </div>

      <div className="w-full flex flex-col gap-4 sm:w-1/2 sm:mx-auto lg:w-1/3">
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="border border-black px-3 py-2 w-full"
          />
        </div>
        <button className="border px-7 py-2 bg-black text-white m-4 w-fit mx-auto">
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
