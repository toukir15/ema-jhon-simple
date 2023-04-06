import React from "react";
import Logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
