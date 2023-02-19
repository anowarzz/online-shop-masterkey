import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={product?.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>
    <p>Price : {product?.price}</p>
    <div className="card-actions justify-end">
      <p className="">Rating: {product?.rating} </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;