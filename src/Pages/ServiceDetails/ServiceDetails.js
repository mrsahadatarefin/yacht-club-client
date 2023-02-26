import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider/ContextProvider';
import AddReview from '../AddReview/AddReview';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
  const {user}=useContext(AuthContext)
    const serviceDetail = useLoaderData()
    const{img,yacht_name,description,price,Capacity,Water_area,_id,Point_of_departure,Onboard_facilities}=serviceDetail
    
    return (
        <div className="   mt-20  max-w-[1440px] m-auto ">
          <div className="  bg-base-100 shadow-xl mt-20">
          <PhotoProvider>
    <PhotoView  src={img}>
    <img src={img} className='h-[600px] w-full p-5 ' alt="Shoes" />
    </PhotoView>
 </PhotoProvider>
  <div className="card-body ">
    <h2 className="card-title font-bold pt-2">{yacht_name}</h2>
    <p className='text-xl pt-2  '>{description}</p>
    <p className='text-xl  pt-2 '> <span className='font-bold '>Price:</span>{price} <span className='text-[#125294]'>$</span></p>
    <p> <span className='font-bold  text-xl pt-2'> Capacity :</span> {Capacity}</p>
    <p> <span className='font-bold  text-xl pt-2'>Water Area : </span> {Water_area}</p>
    <p> <span className='font-bold  text-xl pt-2'>point of departure : </span> {Point_of_departure}</p>
    
    
    
  </div>

          </div>
 
  <div className=' '>
    
    <Reviews></Reviews>

    

  </div>

  <div>
    <AddReview></AddReview>
  </div>
</div>
    );
};

export default ServiceDetails;