import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>0</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
