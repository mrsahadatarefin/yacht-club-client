import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider/ContextProvider';
import useTitle from '../Hooks/useTitle';
import Myreview from './Myreview/Myreview';

const MyReviews = () => {
    useTitle('MyReviews')
    const {user}=useContext(AuthContext)
    
   
    const [reviewData,setReviewData]=useState([])
    useEffect(()=>{
  fetch(`https://yacht-club-server.vercel.app/review?name=${user.displayName}`)
  .then(res => res.json())
  .then(data =>{setReviewData(data)

  


} )
 

    },[user.email])
    return (
        <div className=' h-[800px] mt-20'>
        <div className=' '>
            <p className='text-4xl font-bold text-center'>My review</p>
        </div>
        <div className='mt-20  max-w-[1440px] m-auto  grid  gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {reviewData.map(review =><Myreview  key={review._id} review={review}></Myreview>)}
        </div>
        
    </div>
    );
};

export default MyReviews;
