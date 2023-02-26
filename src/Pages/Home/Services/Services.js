import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./service/Service";

const Services = () => {
  const [yachtData, setYachtData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setYachtData(data));
  }, []);

  return (
    <div className=" max-w-[1440px] m-auto">
      <div className="     grid gap-5 grid-cols-1  justify-items-center  mt-20 ">
        <h1 className="text-black-700 text-6xl font-bold text-center"> Yacht Club services</h1>
        <br />

        <p className="text-xl text-[#125294] font-semibold text-center">
          “Our mission is to provide our guests with exceptional and memorable <br />
          yacht experiences in Dubai by offering a diverse fleet of luxury
         ”
        </p>
      </div>
      <div className=" grid gap-20 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
      
       {yachtData.map(service => <Service key={service._id} service={service} ></Service>).slice(0,3)}

      </div>
      <div className="mt-10  grid  justify-items-center">
        <Link to='/services'><button className="btn btn-wide bg-[#125294] text-white">Show More </button></Link> 
      </div>
    </div>
  );
};

export default Services;
