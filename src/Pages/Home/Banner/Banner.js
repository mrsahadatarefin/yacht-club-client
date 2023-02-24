import React from "react";
import yacht1 from "../../../assets/banner/yacht1.jpg";
import yacht2 from "../../../assets/banner/yacht2.jpg";
import yacht3 from "../../../assets/banner/yacht3.jfif";
import yacht4 from "../../../assets/banner/yacht4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full mt-20">
      <div id="slide1" className="carousel-item relative w-full  ">
        <img src={yacht1} className="w-full h-[500px] " alt="" />

        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 left-5 top-1/2">
          

          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
        <h1 className="text-center text-6xl text-white"><span className="text-center text-2xl"> Let's Feel</span>  

            <br /> cruise experience</h1>
            
              
            

          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        
        <img src={yacht2} className="w-full h-[500px]" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        
       
          
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <h1 className="text-center text-6xl text-white"><span className="text-center text-2xl"> Let's </span>  

            <br /> Explore Dreams </h1>
          
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={yacht3} className="w-full h-[500px]" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <h1 className="text-center text-6xl text-white"><span className="text-center text-2xl">stand up </span>  

            <br /> Achieve your Dreams </h1>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={yacht4} className="w-full h-[500px]" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <h1 className="text-center text-6xl text-white"><span className="text-center text-2xl">Let,s go </span>  

            <br /> We Have to Make Our DaY </h1>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
