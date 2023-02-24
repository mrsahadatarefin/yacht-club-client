import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';

const Team = ({te}) => {
const {img,name, rank}= te
    return (
        <div className=" w-96 bg-base-100 shadow-xl">
        <PhotoProvider>
           <PhotoView  src={img}>
           <img src={img} className='h-[260px] w-full p-5 ' alt="Shoes" />
           </PhotoView>
        </PhotoProvider>
         <div className="card-body  ">
           <h2 className="card-title font-bold text-center">{name}</h2>
           <p className='text-[#cebd88]'>{rank}</p>
           <div>
           
           <div>
           
           </div>
           </div>
          
          
         </div>
       </div>
    );
};

export default Team;
