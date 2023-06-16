import React from 'react';
import img1 from '../../../assets/banner-2/img1.png'
import img2 from '../../../assets/banner-2/img2.png'
import img3 from '../../../assets/banner-2/img-3.png'
import img4 from '../../../assets/banner-2/img-4.png'
import img5 from '../../../assets/banner-2/img-5.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Logos = () => {
   const logos = [
        
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5}
    
    
    
    
    ]
    return (
        <div  data-aos="zoom-out-right" data-aos-duration="2000" className=' m-auto mt-20 grid gap-5  grid-cols-1 lg:grid-cols-5 justify-items-center md:grid-cols-3  mb-20   '>
            
           {
           logos.map(logo => <>

           <img src={logo.img}  alt="" className='h-[120px] transition ease-in-out delay-100 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:text-[#e0f2fe] duration-300 ... animate-fade-up animate-once' />
           </>  )
           } 
        </div>
    );
};

export default Logos;