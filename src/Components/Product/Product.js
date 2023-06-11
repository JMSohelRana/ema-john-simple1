import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="nothing found" />
      <div className="product-details">
        <h6>{name}</h6>
        <h6>price: {price}</h6>
        <p>Manufacturer: {seller}</p>
        <p>rating: {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        type="button"
        className="btn-cart"
      >
        <p>
          Add to Cart <FontAwesomeIcon icon={faCartShopping} />
        </p>
      </button>
    </div>
  );
};

export default Product;
