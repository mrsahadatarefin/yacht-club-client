import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const Service = ({service}) => {
    const{img,yacht_name,description,price,Capacity,Water_area,_id}= service
    return (
        <div className=" w-96 bg-base-100 shadow-xl  ">
 <PhotoProvider>
    <PhotoView  src={img}>
    <img src={img} className='h-[260px] w-full p-5  ' alt="Shoes" />
    </PhotoView>
 </PhotoProvider>
  <div className="card-body">

    <h2 className="card-title font-bold">{yacht_name}</h2>
    <div className="divider "></div> 
    <p>{description.slice(0,100)}.....</p>
    <p className='text-xl  '> <span className='font-bold '>Price:</span>{price} <span className='text-[#125294]'>$</span></p>
   
    <div className="card-actions justify-between">
    <div className="rating p-3">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      <Link to={`/services/details/${_id}`}><button className=" btn glass bg-[#125294] text-black"> details</button></Link>
    </div>
   
  </div>
</div>

    ); 
};

export default Service;