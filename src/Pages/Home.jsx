import { useSelector } from "react-redux";
import { assets } from "../assets/assets";
import Title from "../components/title";
import ProductCard from "../components/ProductCard";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  const products = useSelector((state) => state.product.productsList);
  return (
    <>
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

      <div className="mb-20">
        <Title
          titleOne={"Latest"}
          titleTwo={"Collections"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
          }
        />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-5">
          {products.slice(0, 10).map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </div>

      <div className="mb-20">
        <Title
          titleOne={"Best"}
          titleTwo={"Sellers"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
          }
        />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-5">
          {products
            .filter((product) => product.bestseller === true)
            .slice(0, 5)
            .map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
        </div>
      </div>
      <div className="mb-20 flex justify-center items-center flex-col sm:flex-row gap-10 sm:justify-around">
        <div className="flex justify-center items-center flex-col">
          <img src={assets.exchange_icon} alt="" />
          <p className="text-center">Easy Exchange Policy</p>
          <p className="text-center text-[#898989]">We offer hassle free exchange policy</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={assets.quality_icon} alt="" />
          <p className="text-center">7 Days Return Policy</p>
          <p className="text-center text-[#898989]">We provide 7 days free return policy</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={assets.support_img} alt="" />
          <p className="text-center">Best customer support</p>
          <p className="text-center text-[#898989]">we provide 24/7 customer support</p>
        </div>
      </div>
      <div className="mb-20">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};

export default Home;
