import React from 'react';
import img1 from '../../assets/Featured Yachts/testimonials_1.jpg'
import img2 from '../../assets/Featured Yachts/testimonials_2.jpg'
import img3 from '../../assets/Featured Yachts/testimonials_3.jpg'
import img4 from '../../assets/Featured Yachts/testimonials_4.jpg'




import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";




const ClientSay = () => {
    const clients=[
        
        {
     img:img1, 
     clientSAY:'The container class sets the max-width of an element to match the min-width of the current breakpoint. This is useful if youd prefer to design for a fixed set ',
     name:'Elijah'
    },

        {
     img:img2, 
     clientSAY:' sets the max-width of an element to match the min-width of the current breakpoint. This is useful if youd prefer to design for a fixed set ',
     name:'Benjamin'
    },
        {
     img:img3, 
     clientSAY:' Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application ',
     name:'Lucas'
    },
        {
     img:img4, 
     clientSAY:' Ahead of testing the Contest 49CS we has some miserable weather, certainly not the sort of conditions you’d ordinarily choose to go out in. It had',
     name:'Noah'
    },
        
       
]
    return (
        <div className=' max-w-[1440px]  m-auto mt-20'>
        <div> <p className='text-xl font-bold text-center italic text-[#125294]'>TESTIMONIALS</p>
            <h1 className=' text-4xl lg:text-6xl font-bold text-center'>What Our Clients Say About Our Yachts</h1>
            
        </div>
 <div className='mt-20'>







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
        clients.map(client=><>
         <SwiperSlide>

   
<div className="avatar ">
  <div className="w-24 rounded-full">
    <img src={client.img} alt='' />
  </div>
</div>



<h1 className='text-xl'>{client.clientSAY}</h1>
<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
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

export default ClientSay;