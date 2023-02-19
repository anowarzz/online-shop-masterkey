import React from 'react';

const ProductCard = ({product}) => {
    return (
<div className="card bg-base-100 shadow-xl">
  <figure><img src={product?.picture} alt="Shoes" className='w-32 h-32' /></figure>
  <div className="card-body">
    <h2 className="text-lg">{product?.name}</h2>
    <p>Price : {product?.price}</p>
    <div className="card-actions justify-end">
      <p>Rating: {product?.rating}</p>
    </div>
  </div>
</div>
    );
};

export default ProductCard;