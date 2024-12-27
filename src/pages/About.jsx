import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="border-t-2">
      <div className="p-4">
        <Title titleOne={"About"} titleTwo={"Us"} />
      </div>

      <div className="flex gap-10 items-center justify-start flex-col lg:flex-row">
        <div className="w-full">
          <img src={assets.about_img} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#868686] text-lg">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-[#868686] text-lg">
            Since our inception, we&apos;ve worked tirelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="font-bold text-lg">Our Mission</p>
          <p className="text-[#868686] text-lg">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We&apos;re dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start mb-20">
        <div className="py-6">
          <Title titleOne={"Why"} titleTwo={"Choose Us"} />
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="border p-[60px] flex flex-col gap-5">
            <p className="font-semibold">Quality Assurance:</p>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border p-[60px] flex flex-col gap-5">
            <p className="font-semibold">Convenience:</p>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border p-[60px] flex flex-col gap-5">
            <p className="font-semibold">Exceptional Customer Service:</p>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      <Subscribe />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
