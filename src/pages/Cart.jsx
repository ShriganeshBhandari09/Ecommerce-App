import { useSelector } from "react-redux";
import { assets } from "../assets/assets";
import Title from "../components/title";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartList);
  const [totalAmount, setTotalAmount] = useState(null);
  const shippingFees = 10;

  useEffect(() => {
    const amount =
      cartProducts.reduce((acc, product) => acc + product.price, 0) || 0;
    setTotalAmount(amount);
  }, [cartProducts]);

  return (
    <div className="border-t-2 flex flex-col">
      <div className="mb-10">
        <div className="py-4 flex">
          <Title titleOne={"Your"} titleTwo={"Cart"} />
        </div>

        {cartProducts.map((product) => {
          return (
            <div key={product._id}>
              <div className="flex border-t border-b w-full p-2 items-center justify-between">
                <div className="flex gap-6 items-center">
                  <img src={product.image[0]} alt="" className="w-[100px]" />
                  <div className="flex flex-col gap-4">
                    <p>{product.name}</p>
                    <div className="flex gap-4 items-center">
                      <p className="font-medium">${product.price}</p>
                      <p className="px-2 py-1 border bg-gray-100">M</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={assets.bin_icon}
                    alt=""
                    className="cursor-pointer w-7"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-20">
        <div className="py-4 flex">
          <Title titleOne={"Cart"} titleTwo={"Totals"} />
        </div>
        <div className=" flex flex-col">
          <div className="flex border-b py-2 justify-between">
            <p>Subtotal</p>
            <p>$ {totalAmount}.00</p>
          </div>
          <div className="flex border-b py-2 justify-between">
            <p>Shipping Fees</p>
            <p>$ {shippingFees}.00</p>
          </div>
          <div className="flex border-b py-2 justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">$ {totalAmount + shippingFees}.00</p>
          </div>
        </div>
        <div className="float-right">
          <button className="uppercase px-7 py-2 bg-black text-white mt-10 w-fit">
            Proceed to checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
