import React from "react";
import styles from "./Products.module.css";

import Product from "./Product/Product";

const Products = () => {
  return (
    <div className={styles.products}>
      <Product />
    </div>
  );
};

export default Products;
