import { NavLink } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="py-4">
      <NavLink to={`/product/${product._id}`}>
        <div>
          <div className="overflow-hidden">
            <img
              src={product.image[0]}
              alt=""
              className="hover:scale-110 transition ease-in-out"
            />
          </div>
          <div className="px-2 pt-1">
            <p className="text-[#494949] font-normal text-sm sm:text-base">
              {product.name}
            </p>
            <p className="font-medium">${product.price}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

ProductCard.propTypes;
export default ProductCard;
