const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <p className="text-center font-semibold text-3xl">
        Subscribe now & get 20% off
      </p>
      <p className="text-lg text-[#9A9A9A] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="border border-black w-fit flex justify-between sm:w-[500px] lg:w-[700px]">
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="px-2 w-full"
        />
        <button className="bg-black text-white px-6 py-3">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
