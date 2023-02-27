import React from 'react';
import img from '../../assets/offers/about2.jpg'
import useTitle from '../Hooks/useTitle';

const About = () => {
  useTitle('about')
    return (
        <div className='' >
            
         <div className=' bg-[#c2dbf5] w-full h-[300px]'>
      <h1 className='text-5xl font-bold text-[#55021b] text-center pt-20'>About Us</h1>
      <p className='text-2xl font-bold text-center pt-5'>You live the dream. We take care of it.</p>
            </div> 

            <div className='h-[800px]'>
                <div className=' max-w-[1440px]  m-auto grid grid-cols-1 justify-items-center lg:grid-cols-2  mt-20 p-10 bg-[#f8ecef] rounded-md'>
                <div className=" w-full  ">
        <h1 className="text-3xl font-bold text-center ">You live the dream. We take care of it.</h1>
        <p className="text-xl pt-10 text-center">
          Globalia Yacht club is a company based in Cyprus with wide
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
            
            </div>
        </div>
    );
};

export default About;