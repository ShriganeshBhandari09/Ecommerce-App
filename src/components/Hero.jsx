import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="border border-gray-400 flex flex-col sm:flex-row w-full mb-20">
      <div className="flex justify-center items-center py-10 sm:w-1/2">
        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="flex items-center gap-2 ">
            <hr className="w-[44px] h-[3px] bg-[#484848]" />
            <p className="text-[18px] lg:text-[20px] uppercase text-[#414141]">
              Our Bestsellers
            </p>
          </div>

          <h1 className="font-prata text-4xl lg:text-5xl text-[#414141]">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 ">
            <p className="text-[18px] lg:text-[20px] uppercase text-[#414141] font-bold">
              Shop Now
            </p>
            <hr className="w-[44px] h-[2px] bg-[#484848]" />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
