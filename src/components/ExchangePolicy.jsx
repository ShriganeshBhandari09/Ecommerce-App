import { assets } from "../assets/assets";

const ExchangePolicy = () => {
  return (
    <div className="mb-20 flex justify-center items-center flex-col sm:flex-row gap-10 sm:justify-around">
      <div className="flex justify-center items-center flex-col">
        <img src={assets.exchange_icon} alt="" />
        <p className="text-center">Easy Exchange Policy</p>
        <p className="text-center text-[#898989]">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src={assets.quality_icon} alt="" />
        <p className="text-center">7 Days Return Policy</p>
        <p className="text-center text-[#898989]">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src={assets.support_img} alt="" />
        <p className="text-center">Best customer support</p>
        <p className="text-center text-[#898989]">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default ExchangePolicy;
