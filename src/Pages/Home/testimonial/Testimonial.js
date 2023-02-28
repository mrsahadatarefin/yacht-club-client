import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";


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
        <div className=' max-w-[1440px] m-auto mt-20'>
        <div className=' '>
            
            <p className='text-4xl text-black-700 font-bold text-center text-[#125294]  italic font-semibold '>Explore Our Trended & Featured Yachts</p>
        </div>
        <div className='mt-20   '>

        <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
       
       {
        featuredYachts.map(client=><>
         <SwiperSlide>

 


<img src={client.img} alt=''  />
<h1 className='text-xl'>{client.clientSAY}</h1>

<p className='text-2xl font-bold italic'>{client.name}</p>


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