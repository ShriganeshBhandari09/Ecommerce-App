import { NavLink } from "react-router";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-4 py-4">
      <div>
        <NavLink to="/">
          <img src={assets.logo} alt="" className="w-[180px]" />
        </NavLink>
      </div>

      <div className="flex gap-6 text-lg uppercase font-medium">
        <NavLink to="/">
          <p className="text-[#2A2A2A]">Home</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden " />
        </NavLink>
        <NavLink to="/collections">
          <p className="text-[#2A2A2A]">Collections</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
        <NavLink to="/about">
          <p className="text-[#2A2A2A]">About</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
        <NavLink to="/contact">
          <p className="text-[#2A2A2A]">Contact</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
      </div>

      <div className="flex gap-4">
        <img src={assets.search_icon} alt="" className="w-[24px] h-[24px]" />
        <NavLink to="/profile">
          <img src={assets.profile_icon} alt="" className="w-[24px] h-[24px]" />
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <img src={assets.cart_icon} alt="" className="w-[24px] h-[24px]" />
            <p className="absolute top-3.5 bg-black text-white left-3 rounded-full px-1 flex justify-center items-center text-xs leading-[19.5px]">
              10
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
