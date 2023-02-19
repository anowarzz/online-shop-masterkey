import React, { useEffect, useState } from "react";
import DailyDeals from "../../components/DailyDeals/DailyDeals";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import ProductsList from "../../components/ProductLists/ProductsList";
import SideBar from "../../components/SideBar/SideBar";

const HomePage = () => {
  // state to store the products form  server api
  const [products, setProducts] = useState([]);

  //   state to catch the loading phase

  const [loading, setLoading] = useState(false);

  // fetching products from server

  useEffect(() => {
    setLoading(true);
    fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-8 gap-2">
      <div className="col-span-2 border-r-gray-300 border-4 border-y-transparent">
        <SideBar />
      </div>

      <div className="col-span-6 border">
        <Navbar />
        <HeroSection />
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <ProductsList
              products={products}
              loading={loading}
              setLoading={setLoading}
            />
          </div>

          <div className="col-span-1">

        <div>
    
        </div>

            <div className="flex flex-cols">
              {products?.map((product) => <DailyDeals product={product}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
