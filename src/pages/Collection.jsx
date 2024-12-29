import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Collection = ({ searchToggle, setSearchToggle }) => {
  const products = useSelector((state) => state.product.productsList);
  const [searchValue, setSearchValue] = useState("");
  const [filterProducts, setFilterProducts] = useState(products);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const handleSearchInput = (searchValue) => {
    if (!searchValue || !searchValue.trim().length) {
      setFilterProducts(products);
      return;
    }
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
    setFilterProducts(filterProducts);
  };

  useEffect(() => {
    handleSearchInput(searchValue);
  }, [filterProducts, searchValue]);

  return (
    <>
      <div className="border-t-2 mb-7 ">
        {searchToggle && (
          <div className="bg-gray-50 border-b-2 p-4">
            <div className="flex items-center gap-4 justify-center">
              <div className="border w-full lg:w-1/2 flex items-center px-2 py-2 rounded-3xl">
                <input
                  type="text"
                  name=""
                  id=""
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full outline-none border-none  text-lg bg-inherit"
                />
                <img
                  src={assets.search_icon}
                  alt=""
                  className="w-[20px] h-[20px] mr-2"
                />
              </div>
              <div>
                <img
                  src={assets.cross_icon}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => setSearchToggle(!searchToggle)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex mb-20 gap-10">
        <div className="w-[200px] lg:flex flex-col gap-3 hidden">
          <p className="uppercase text-2xl pb-5">Filters</p>
          <div className="border p-2 w-[200px] flex flex-col gap-y-2">
            <p className="uppercase font-medium">Categories</p>
            <div className="flex gap-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-[#272727] font-normal">
                Mens
              </label>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-[#272727] font-normal">
                Women
              </label>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-[#272727] font-normal">
                Kids
              </label>
            </div>
          </div>
          <div className="border p-2 w-[200px] flex flex-col gap-y-2">
            <p className="uppercase font-medium">Type</p>
            <div className="flex gap-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-[#272727] font-normal">
                Topwear
              </label>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-[#272727] font-normal">
                Bottomwear
              </label>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-[#272727] font-normal">
                Winterwear
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Title titleOne={"All"} titleTwo={"Collections"} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5">
            {filterProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collection;
