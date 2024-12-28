import Footer from "../components/Footer";
import Title from "../components/Title";
import { useSelector } from "react-redux";

const Orders = () => {
  const cartProducts = useSelector((state) => state.cart.cartList);

  return (
    <div className="border-t-2 flex flex-col">
      <div className="mb-10">
        <div className="py-4 flex">
          <Title titleOne={"My"} titleTwo={"Orders"} />
        </div>

        {cartProducts.map((product) => {
          return (
            <div key={product._id}>
              <div className="flex border-t border-b w-full p-2 items-center justify-between">
                <div className="flex gap-6 items-center">
                  <img src={product.image[0]} alt="" className="w-[100px]" />
                  <div className="flex flex-col gap-2">
                    <p>{product.name}</p>
                    <div className="flex gap-4 items-center">
                      <p className="font-medium">${product.price}</p>
                      <p className="px-2 py-1 border bg-gray-100">M</p>
                    </div>
                    <div>
                      <p>Order Date: 28/12/2024</p>
                      <p>Payment Type: COD</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="border border-black py-2 px-4">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Orders;
