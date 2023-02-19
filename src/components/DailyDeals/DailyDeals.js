import React from "react";

const DailyDeals = ({ product }) => {
  return (
    <div>
      <div className="flex justify-around items-center">
        <img src={product?.picture} alt="" className="w-16 h-16" />
        <h2>{product?.name}</h2>
      </div>
    </div>
  );
};

export default DailyDeals;
