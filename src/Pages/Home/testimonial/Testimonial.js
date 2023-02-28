import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

 
// import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";


import img1 from '../../../assets/Featured Yachts/img-1.jpg'
import img2 from '../../../assets/Featured Yachts/img-2.jpg'
import img3 from '../../../assets/Featured Yachts/img-3.jpg'
import img4 from '../../../assets/Featured Yachts/img-4.jpg'
import img5 from '../../../assets/Featured Yachts/img-5.jpg'
import img6 from '../../../assets/Featured Yachts/img-6.jpg'

const Testimonial = () => {
const featuredYachts=[
    {
 img:img1,
 name:'marida',
 price:1500},
    {
 img:img2,
 name:'Afina',
 price:1300},
    {
 img:img3,
 name:'Nibula',
 price:1300},
    {
 img:img4,
 name:'Nautilus',
 price:2500},
    {
 img:img5,
 name:'Madsummer',
 price:2600},
    {
 img:img6,
 name:'Arrow',
 price:2100},









]

    return (
        <div className='max-w-[1100px]  m-auto mt-20'>
        <div className=' '>
            
            <p className='text-4xl text-black-700 font-bold text-center text-[#125294]  italic font-semibold '>Explore Our Trended & Featured Yachts</p>
        </div>
        <div className='mt-20'>

        <>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

       
{
    featuredYachts.map(ya => <>
    <SwiperSlide> 
        
        <img src={ya.img} alt="" srcset="" />
        <h1 className='text-3xl font-bold italic'>{ya.name}</h1>
        <p className='text-xl font-bold text-[#125294] uppercase'>$ {ya.price}</p>
    
    
    </SwiperSlide>
    
    </>)
}
        

      


      </Swiper>
    </>
      
        </div>
    </div>
    );
};

export default Testimonial;