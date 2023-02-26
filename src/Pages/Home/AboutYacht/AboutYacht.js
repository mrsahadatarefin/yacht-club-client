import React from "react";
import img from '../../../assets/banner-2/image-about.jpg'


const AboutYacht = () => {

    
  return (
    <div className=" max-w-[1440px]  m-auto grid grid-cols-1 justify-items-center lg:grid-cols-2  mt-10 p-10 bg-sky-100 rounded-md ">
      <div className=" w-full  ">
        <h1 className="text-3xl font-bold text-center ">The cruising experience in Cyprus</h1>
        <p className="text-xl pt-10 text-center">
          Globalia Yachting is a yacht charter company based in Cyprus with wide
          experience in the yacht charter business. That is our commitment to
          you to ensure an entirely relaxing and carefree cruise. You can choose
          a charter on a luxury sailing yacht or catamaran, and follow one of
          our recommended sailing itineraries designed to take in the full
          experience of Cyprus. Our exceptional knowledge of the Eastern
          Mediterranean yachting scene increases our clients’ satisfaction with
          a choice of only the best yachts, providing the highest levels of
          maintenance and the finest facilities.
        </p>
      </div>
      <div>
        <img src={img} className='w-[400px] bg-black' alt="" />
      </div>
      
    </div>
  );
};

export default AboutYacht;
