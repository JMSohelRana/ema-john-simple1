import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="please insert right images" />
        <div nav-bar>
          <a href="/Shop">Shop</a>
          <a href="/">Order Review</a>
          <a href="/Manage Inventory">Manage Inventory</a>
          <a href="/Login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
