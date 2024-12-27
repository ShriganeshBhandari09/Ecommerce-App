import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ExchangePolicy from "../components/ExchangePolicy";
import LatestProducts from "../components/LatestProducts";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestProducts />
      <BestSellers />
      <ExchangePolicy />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
