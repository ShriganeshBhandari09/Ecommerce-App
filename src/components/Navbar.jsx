import { NavLink, useLocation } from "react-router";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ searchToggle, setSearchToggle }) => {
  const [navActive, setNavActive] = useState(false);
  const cartProducts = useSelector((state) => state.cart.cartList);
  const [searchVisible, setSearchVisible] = useState(false);

  let location = useLocation();

  useEffect(() => {
    // Google Analytics
    if (location.pathname === "/collections") {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  }, [location, searchVisible]);

  const handleNavbar = () => {
    setNavActive(!navActive);
  };
  return (
    <>
      <div className="flex justify-between items-center gap-4 py-4">
        <div>
          <NavLink to="/">
            <img src={assets.logo} alt="" className="w-[120px]" />
          </NavLink>
        </div>

        <div className="hidden md:flex gap-4 uppercase font-medium text-[#2A2A2A] text-base">
          <NavLink to="/">
            <p>Home</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden " />
          </NavLink>
          <NavLink to="/collections">
            <p>Collections</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </NavLink>
          <NavLink to="/about">
            <p>About</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </NavLink>
        </div>

        <div className="flex gap-4 justify-center items-center">
          {
            <img
              src={assets.search_icon}
              alt=""
              className={`w-[20px] h-[20px] cursor-pointer ${
                searchVisible ? "" : "invisible"
              }`}
              onClick={() => setSearchToggle(!searchToggle)}
            />
          }
          <NavLink to="/login">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-[20px] h-[20px]"
            />
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <img
                src={assets.cart_icon}
                alt=""
                className="w-[20px] h-[20px]"
              />
              <p className="absolute top-3 bg-black text-white left-2 rounded-full px-1 flex justify-center items-center text-xs">
                {cartProducts.length}
              </p>
            </div>
          </NavLink>
          <div className="md:hidden">
            <img
              src={assets.menu_icon}
              alt=""
              className="w-[18px] h-[18px] cursor-pointer"
              onClick={handleNavbar}
            />
          </div>
        </div>
      </div>
      <div>
        {navActive && (
          <div className="fixed top-0 left-0 bottom-0 w-full h-full bg-white md:hidden">
            <div
              className="flex items-center cursor-pointer gap-2 px-2 py-2"
              onClick={handleNavbar}
            >
              <img src={assets.dropdown_icon} alt="" className="w-3" />
              <p className="text-[20px]">Back</p>
            </div>
            <div className="flex flex-col px-0">
              <NavLink to="/" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-0 p-2">Home</p>
              </NavLink>
              <NavLink to="/collections" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-0 p-2">Collections</p>
              </NavLink>
              <NavLink to="/about" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-0 p-2">About</p>
              </NavLink>
              <NavLink to="/contact" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-2 p-2">Contact</p>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
