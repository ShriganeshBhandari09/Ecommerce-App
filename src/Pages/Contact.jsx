import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Title from "../components/title";

const Contact = () => {
  return (
    <div className="border-t-2 p-4">
      <Title titleOne={"Contact"} titleTwo={"Us"} />

      <div className="flex justify-center items-center gap-8 p-10">
        <div className="w-[500px]">
          <img src={assets.contact_img} alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-xl font-semibold text-[#4E4E4E]">Our Store</p>
          <p className="text-[#6D6D6D]">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-[#6D6D6D]">
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>
          <p className="text-xl font-semibold text-[#4E4E4E]">
            Careers at Forever
          </p>
          <p className="text-[#6D6D6D]">
            Learn more about our teams and job openings.
          </p>
          <div>
            <button className="border px-6 py-4 border-black text-[#303030]">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="p-20">
        <Subscribe />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
