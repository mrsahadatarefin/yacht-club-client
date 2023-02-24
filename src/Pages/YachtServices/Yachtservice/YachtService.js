import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const YachtService = ({service}) => {
    const{img,yacht_name,description,price,Capacity,Water_area,_id}= service
    return (
        <div className=" w-96 bg-base-100 shadow-xl">
        <PhotoProvider>
           <PhotoView  src={img}>
           <img src={img} className='h-[260px] w-full p-5 ' alt="Shoes" />
           </PhotoView>
        </PhotoProvider>
         <div className="card-body">
           <h2 className="card-title font-bold">{yacht_name}</h2>
           <p>{description.slice(0,100)}.....</p>
           <p className='text-xl  '> <span className='font-bold '>Price:</span>{price} <span className='text-[#cebd88]'>$</span></p>
           <div className="card-actions justify-end">
              <Link to={`/services/details/${_id}`}><button className=" btn glass bg-[#cebd88] text-black"> details</button></Link>
           </div>
         </div>
       </div>
    );
};

export default YachtService;