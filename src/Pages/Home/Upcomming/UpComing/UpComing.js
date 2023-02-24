import React from 'react';

const UpComing = ({up}) => {
    const { name, date, dis, price, img}=up
    return (
        <div className='grid grid-cols-1 justify-items-center content-center p-6 mt-6 lg:flex md:flex  '>
           <div>
            <img src={img} className='bg-[#cebd88] p-3 h-[250px] w-[300px]'  alt="" />
           </div>
           <div className='mt-6 p-6  ' >
            <h1 className='text-xl font-bold'>{name}</h1>
            <p className='text-xl'>{date}</p>
            <p>{dis}</p>
            <p className='text-xl'> <span className='font-bold '>Price : </span>{price}$ / <span className='font-bold'>person</span></p>
           </div>
        </div>
    );
};

export default UpComing;