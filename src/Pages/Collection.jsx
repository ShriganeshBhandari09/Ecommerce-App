import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Title from "../components/title";
import Footer from "../components/Footer";

const Collection = () => {
  const products = useSelector((state) => state.product.productsList);
  return (
    <>
      <div className="border-t-2 p-4 flex mb-20 gap-10">
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5">
            {products.map((product) => {
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
