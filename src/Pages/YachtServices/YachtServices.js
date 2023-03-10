import React, { useEffect, useState } from 'react';
import useTitle from '../Hooks/useTitle';
import YachtService from './Yachtservice/YachtService';

const YachtServices = () => {
  useTitle('service')
    const [yachtData, setYachtData] = useState([]);
  useEffect(() => {
    fetch("https://yacht-club-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setYachtData(data));
  }, []);
    return (
        <div className=" max-w-[1440px] m-auto">
        <div className="  grid grid-cols-1  justify-items-center  mt-20 ">
          <h1 className="text-black-700 text-6xl font-bold text-center"> Yacht Club services</h1>
          <br />
  
          <p className="text-xl text-[#125294] font-semibold text-center">
            “Our mission is to provide our guests with exceptional and memorable <br />
            yacht experiences in Dubai by offering a diverse fleet of luxury
           ”
          </p>
        </div>
        <div className=" grid gap-20 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        
         { yachtData.map(service => <YachtService key={service._id} service={service}></YachtService>)}
  
        </div>
        
      </div>
    );
};

export default YachtServices;