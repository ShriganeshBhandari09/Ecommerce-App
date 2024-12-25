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
      <div className="flex justify-between items-center border border-gray-400 mb-20">
        <div className="flex justify-center items-start flex-col mx-auto">
          <div className="flex justify-center items-center gap-2">
            <hr className="w-[44px] h-[3px] bg-[#484848]" />
            <p className="text-[18px] uppercase text-[#414141]">
              Our Bestsellers
            </p>
          </div>

          <h1 className="font-prata text-[60px] text-[#414141]">
            Latest Arrivals
          </h1>
          <div className="flex justify-center items-center gap-2 ">
            <p className="text-[18px] uppercase text-[#414141] font-bold">
              Shop Now
            </p>
            <hr className="w-[44px] h-[2px] bg-[#484848]" />
          </div>
        </div>
        <div>
          <img src={assets.hero_img} alt="" className="h-[600px]" />
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
        <div className="grid grid-cols-5 gap-x-5">
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
        <div className="grid grid-cols-5 gap-x-5">
          {products
            .filter((product) => product.bestseller === true)
            .slice(0, 5)
            .map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
        </div>
      </div>
      <div className="mb-20 flex justify-around items-center">
        <div className="flex justify-center items-center flex-col gap-2">
          <img src={assets.exchange_icon} alt="" />
          <p>Easy Exchange Policy</p>
          <p>We offer hassle free exchange policy</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <img src={assets.quality_icon} alt="" />
          <p>7 Days Return Policy</p>
          <p>We provide 7 days free return policy</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <img src={assets.support_img} alt="" />
          <p>Best customer support</p>
          <p>we provide 24/7 customer support</p>
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
