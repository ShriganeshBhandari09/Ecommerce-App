import Title from './Title';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const products = useSelector((state) => state.product.productsList);

  return (
    <div className="mb-20">
    <Title
      titleOne={"Best"}
      titleTwo={"Sellers"}
      description={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
      }
    />
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-5">
      {products
        .filter((product) => product.bestseller === true)
        .slice(0, 5)
        .map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
    </div>
  </div>
  )
}

export default BestSellers