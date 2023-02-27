import React, { useContext, useEffect, useState } from 'react';

import ADDSingleReview from './ADDSingleReview/ADDSingleReview';

const AddReview = () => {
    
     const [reviewData,setReviewData]=useState([])
     useEffect(()=>{
   fetch('https://yacht-club-server.vercel.app/reviews')
   .then(res => res.json())
   .then(data =>{setReviewData(data)

   


} )
  

     },[])
    return (
        <div className='mt-20'>
            <div className=' '>
                <p className='text-4xl font-bold text-center'>What client say</p>
            </div>
            <div className='mt-20  max-w-[1440px] m-auto  grid  gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {reviewData.map(review =><ADDSingleReview  key={review._id} review={review} ></ADDSingleReview> ).slice(0,6)}
            </div>
            
        </div>
    );
};

export default AddReview;