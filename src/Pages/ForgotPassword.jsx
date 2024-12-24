import Footer from '../components/Footer'

const ForgotPassword = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
    <div className="flex justify-center items-center gap-3 p-10 flex-col w-[500px] mb-32 mt-10">
      <div className=" flex justify-center items-center gap-2 text-4xl pb-4">
        <h2 className="font-prata ">Forgot Password</h2>
        <hr className="w-[50px] h-[3px] bg-[#484848]" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="border border-black px-3 py-2"
        />
      </div>
      <div className="flex items-end justify-end gap-4 w-full cursor-pointer">
      </div>
      <button className="border px-4 py-2">Send Email</button>
    </div>
    <Footer />
  </div>
  )
}

export default ForgotPassword