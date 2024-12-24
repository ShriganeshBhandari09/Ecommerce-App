const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <p className="text-center font-semibold text-3xl">
        Subscribe now & get 20% off
      </p>
      <p className="text-lg text-[#9A9A9A]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="border mt-1">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your email"
          className="p-2 w-[700px] text-xl outline-none"
        />
        <button className="px-7 p-2 bg-black text-white text-xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
