import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({products,loading, setLoading}) => {
  

  return (
    <div className="mt-8 px-8">
      <div className="grid gri-cols md:grid-cols-2 lg:grid-cols-3">
        {loading && (
          <h3 className="text-center text-3xl font-bold"> Loading ....</h3>
        )}

        {products &&
          products
            ?.slice(0, 3)
            .map((product) => (
              <ProductCard product={product} key={product?._id} />
            ))}
      </div>
    </div>
  );
};

export default ProductsList;
