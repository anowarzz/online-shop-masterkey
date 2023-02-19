import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  // state to store the products form  server api

  const [products, setProducts] = useState(null);

  // fetching products from server

  useEffect(() => {
    fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="mt-8 ">
      <div className="grid gri-cols md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
