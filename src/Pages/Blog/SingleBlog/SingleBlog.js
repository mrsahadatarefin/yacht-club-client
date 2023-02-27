import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleBlog = ({blog}) => {
    const {img,name,description} = blog
    return (
        <div className=" w-96 bg-base-100 shadow-xl">
        <PhotoProvider>
           <PhotoView  src={img}>
           <img src={img} className='h-[260px] w-full p-5 ' alt="Shoes" />
           </PhotoView>
        </PhotoProvider>
         <div className="card-body">
       
           <h2 className="card-title font-bold">{name}</h2>
           <div className="divider "></div> 
           <p>{description.slice(0,120)}....</p>
           
           <Link className='pt-2'><button className=" btn glass bg-[#125294] text-black  "> Read more</button></Link>
            
         </div>
         
       </div>
    );
};

export default SingleBlog;