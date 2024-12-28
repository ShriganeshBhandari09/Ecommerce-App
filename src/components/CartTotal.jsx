import { useSelector } from "react-redux";
import Title from "./Title";
import { useEffect, useState } from "react";

const CartTotal = () => {
  const cartProducts = useSelector((state) => state.cart.cartList);
  const [totalAmount, setTotalAmount] = useState(null);
  const shippingFees = 10;

  useEffect(() => {
    const amount =
      cartProducts.reduce((acc, product) => acc + product.price, 0) || 0;
    setTotalAmount(amount);
  }, [cartProducts]);

  return (
    <div className="mb-20 w-full lg:w-1/3">
      <div className="py-4 flex">
        <Title titleOne={"Cart"} titleTwo={"Totals"} />
      </div>
      <div className=" flex flex-col">
        <div className="flex border-b py-2 justify-between">
          <p>Subtotal</p>
          <p>${totalAmount}.00</p>
        </div>
        <div className="flex border-b py-2 justify-between">
          <p>Shipping Fees</p>
          <p>$ {shippingFees}.00</p>
        </div>
        <div className="flex border-b py-2 justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">${totalAmount + shippingFees}.00</p>
        </div>
      </div>
      <div className="float-right">
        <button className="uppercase px-7 py-2 bg-black text-white mt-10 w-fit">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
