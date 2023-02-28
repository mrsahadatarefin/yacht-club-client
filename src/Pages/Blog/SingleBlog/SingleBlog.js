import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleBlog = ({blog}) => {
    const {img,name,description} = blog
    return (
        
        <div className="card card-side bg-base-100 shadow-xl m-2">
  <figure><img src={img} alt="Movie" className='h-[300px] w-full '/></figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <p className=''>{description.slice(0,120)}.....</p>
    <div className="card-actions justify-end">
      <button className="btn glass bg-[#125294] text-black">Read more</button>
    </div>
  </div>
</div>























    );
};

export default SingleBlog;