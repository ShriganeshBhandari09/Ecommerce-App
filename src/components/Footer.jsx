import { Link } from "react-router";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pb-4">
      <div className="flex justify-between">
        <div className="w-1/3 flex flex-col gap-2">
          <img src={assets.logo} alt="" className="w-[180px]" />
          <p className="text-[#595959]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-lg">Company</p>
          <ul className="text-[#595959] flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-lg">Get in Touch</p>
          <ul className="text-[#595959] flex flex-col gap-1">
            <li>+1-000-000-0000</li>
            <li>shriganesh.bhandari693@gmail.com</li>
            <Link
              to="https://www.instagram.com/shriganeshbhandari/"
              target="_blank"
            >
              <li>Instagram</li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className="my-4 border-[#D9D9D9]" />
      <p className="text-center text-[#595959]">
        Copyright 2024@ <span> </span>
        <Link to="https://github.com/ShriganeshBhandari09" target="_blank">
          Shriganesh Bhandari
        </Link>
        <span> </span>- All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
