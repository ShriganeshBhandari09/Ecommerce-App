import { useSelector } from "react-redux";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Footer from "../components/Footer";
import CartTotal from "../components/CartTotal";
import emptyCart from "../assets/cart-empty.svg";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartList);

  return (
    <div className="border-t-2 flex flex-col">
      <div className="mb-10">
        <div className="py-4 flex">
          <Title titleOne={"Your"} titleTwo={"Cart"} />
        </div>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => {
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
          })
        ) : (
          <div className="h-[55vh] flex justify-center items-center flex-col gap-2">
            <img src={emptyCart} alt="" />
            <h1 className="text-5xl text-center">Your cart is Empty</h1>
          </div>
        )}
      </div>
      {cartProducts.length > 0 && (
        <>
          <div className="flex justify-end">
            <CartTotal />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
