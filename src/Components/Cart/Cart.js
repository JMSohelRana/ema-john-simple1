import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let grandTotal = 0;
  let tax = 0;

  for (const product of cart) {
    total += product.price;
    shipping += product.shipping;
    // tax = tax.toFixed(2);
  }
  tax = tax + total * 0.1;
  const totalTax = parseFloat(tax.toFixed(2));

  grandTotal = total + shipping + tax;
  grandTotal = grandTotal.toFixed(2);
  return (
    <div style={{ margin: "5px 10px" }} className="cart">
      <p>Selected items:{cart.length}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${totalTax}</p>
      <h6>Grand Total: ${grandTotal}</h6>
    </div>
  );
};

export default Cart;
