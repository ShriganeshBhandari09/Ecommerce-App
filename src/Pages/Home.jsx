import { assets, products } from "../assets/assets";
import Title from "../components/title";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center border border-gray-400">
        <div className="flex justify-center items-start flex-col mx-auto">
          <p className="text-[18px] flex justify-center items-center gap-2 uppercase text-[#414141]">
            <hr className="w-[44px] h-[3px] bg-[#484848]" />
            Our Bestsellers
          </p>
          <h1 className="font-prata text-[60px] text-[#414141]">
            Latest Arrivals
          </h1>
          <p className="text-[18px] flex justify-center items-center gap-2 uppercase text-[#414141] font-bold">
            Shop Now
            <hr className="w-[44px] h-[2px] bg-[#484848]" />
          </p>
        </div>
        <div>
          <img src={assets.hero_img} alt="" className="h-[600px]" />
        </div>
      </div>
    </>
  );
};

export default Home;
