// /pages/products.js
import React from "react";
import Layout from "../components/Layout";
import ProductList from "../../views/products/ProductList";

const ProductsPage = () => {
  return (
    <Layout title="Products - My Shop">
      <ProductList />
    </Layout>
  );
};

export default ProductsPage;
