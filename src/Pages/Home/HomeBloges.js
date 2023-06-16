import React, { useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlog/SingleBlog';

const HomeBloges = () => {
    const [blogData,setBlogData]=useState([])
    useEffect(()=>{
  fetch('data.json')
  .then(res => res.json())
  .then(data =>{

    setBlogData(data)


} )},[])
    return (
        <div className='max-w-[1440px] m-auto'>
          
           <p className=' text-sm text-[#125294] font-bold text-center mt-20'>NEWS & UPDATES</p>
            <h1 className='text-5xl font-bold text-center mt-5' >LATEST FROM BLOG</h1>
            <div className=" grid gap-20 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
        
        {
            blogData.map(blog =><SingleBlog key={blog.name} blog={blog}></SingleBlog>)
        }
 
       </div>
            
        </div>
    );
};

export default HomeBloges;