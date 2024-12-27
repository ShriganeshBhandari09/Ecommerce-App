import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Title from "./Title";

const LatestProducts = () => {
  const products = useSelector((state) => state.product.productsList);

  return (
    <div className="mb-20">
      <Title
        titleOne={"Latest"}
        titleTwo={"Collections"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
        }
      />
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-5">
        {products.slice(0, 10).map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default LatestProducts;
