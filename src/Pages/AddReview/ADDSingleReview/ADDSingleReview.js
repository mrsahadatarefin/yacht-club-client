import React, { useContext } from 'react';
import img from '../../../assets/upcomming/sailor_01.jpg'
import { AuthContext } from '../../../Context/ContextProvider/ContextProvider';

const ADDSingleReview = ({review}) => {
  const {user}=useContext(AuthContext)
    const {name,message}=review
    return (
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <div className='flex justify-start '>
        
    <div className="avatar px-5">
  <div className="w-16 rounded-full ">
   
   <img src={img} alt='' className='' /> 
    
   
  </div>
  </div>
  <div><p className=' text-center text-xl font-bold  pt-3 text-sky-700'>{name}</p></div>
        
    </div>
   
    <p className=' text-center text-xl pt-2'>{message}</p>
    <div className="rating m-auto ">
        <p className='text-xl font-bold pr-3'>Rating : </p>
  <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
  <input type="radio" name="rating-1" className="mask mask-star bg-orange-400"  />
  <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked/>
  <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
  <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
</div>
  </div>
</div>
    );
};

export default ADDSingleReview;