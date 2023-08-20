import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const productCard = ({ product }) => {
  // console.log("product", product);

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt="images" />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />
        <span>({product.numOfReviews} reviews)</span>
      </div>
      <span className="productCardSpan">{`₹${product.price}`}</span>
    </Link>
  );
};

export default productCard;
