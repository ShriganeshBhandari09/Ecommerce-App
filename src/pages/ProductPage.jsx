import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.productsList);
  const [displayProduct, setDisplayProduct] = useState([]);
  const [displayImage, setDisplayImage] = useState(0);
  const [toggle, setToggle] = useState(0);

  useEffect(() => {
    const filterProduct = products.find((product) => product._id === id);
    setDisplayProduct([filterProduct]);
  }, [products, id]);

  return (
    <>
      <div className="border-t-2 flex flex-col gap-6">
        {displayProduct.map((product) => {
          return (
            <div
              key={product._id}
              className="flex flex-col mt-10 gap-3 lg:flex-row lg:gap-10"
            >
              <div className="flex flex-col-reverse gap-3 sm:flex-row h-full">
                <div className="flex gap-3 sm:flex-col ">
                  {product.image.map((image, id) => {
                    return (
                      <div key={id}>
                        <img
                          src={image}
                          alt=""
                          className="sm:max-w-24 cursor-pointer hover:border-2"
                          onClick={() => setDisplayImage(id)}
                          onMouseEnter={() => setDisplayImage(id)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="sm:w-[24rem] lg:w-[30rem]">
                  <img
                    src={product.image[displayImage]}
                    alt=""
                    className="w-full sm:w-[24rem] lg:w-[30rem]"
                  />
                </div>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-2xl">{product.name}</h1>
                <div className="flex gap-1 h-5 w-5 items-center">
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_dull_icon} alt="" />
                  <p>(122)</p>
                </div>
                <div className="mt-5">
                  <p className="font-bold text-2xl">${product.price}</p>
                </div>
                <div>
                  <p className="font-light">{product.description}</p>
                </div>
                <div className="flex gap-2 flex-col">
                  <p className="sm:text-lg">Select Size</p>
                  <div className="flex gap-4">
                    {product.sizes.map((size, id) => (
                      <div
                        className="border px-4 py-2 bg-slate-100 hover:bg-slate-200"
                        key={id}
                      >
                        <input
                          type="radio"
                          name=""
                          id=""
                          className="appearance-none"
                        />
                        <label htmlFor="">{size}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 mb-5">
                  <button className="bg-black text-white py-2 px-7">
                    Add to Cart
                  </button>
                </div>
                <hr className="w-full h-2" />
                <div className="text-[#6b7280]">
                  <p>100% Original product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-10 mb-20">
          <div className="flex ">
            <button className="border px-4 py-2" onClick={() => setToggle(0)}>
              Description
            </button>
            <button
              className={`border px-4 py-2 border-l-0`}
              onClick={() => setToggle(1)}
            >
              Reviews
            </button>
          </div>
          <div className="border p-4 flex flex-col gap-2 text-[#6b7280]">
            {toggle === 0 &&
              displayProduct.map((product, index) => {
                return <p key={index}>{product.longDescription}</p>;
              })}
            {toggle === 1 &&
              displayProduct.map((product, index) => {
                return (
                  <div key={index} className="flex flex-col gap-4">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="flex gap-4">
                          <p>{review.user}</p>
                          <p>{review.rating}</p>
                        </div>
                        <p>{review.comment}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
          </div>
        </div>

        <div className="mb-20">
          <Title
            titleOne={"Related"}
            titleTwo={"Products"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5">
            {products.slice(5, 10).map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
