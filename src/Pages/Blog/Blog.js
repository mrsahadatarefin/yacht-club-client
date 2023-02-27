import React, { useEffect, useState } from 'react';
import useTitle from '../Hooks/useTitle';
import img from '../../assets/banner/yacht4.jpg'
import { Link } from 'react-router-dom';
import SingleBlog from './SingleBlog/SingleBlog';

const Blog = () => {

    
    
   
    const [blogData,setBlogData]=useState([])
    useEffect(()=>{
  fetch('data.json')
  .then(res => res.json())
  .then(data =>{

    setBlogData(data)


} )},[])
     

    useTitle('Blog')
    return (
        <div className=" max-w-[1440px] m-auto">
        <div className="     grid gap-5 grid-cols-1  justify-items-center  mt-20 ">
          <h1 className="text-black-700 text-6xl font-bold text-center"> Our Blog</h1>
          <br />
  
          <p className="text-xl text-[#125294] font-semibold text-center">
            “Our mission is to provide our guests with exceptional and memorable <br />
            yacht experiences in Dubai by offering a diverse fleet of luxury
           ”
          </p>
        </div>
        <div className=" grid gap-20 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        
         {
             blogData.map(blog =><SingleBlog key={blog.name} blog={blog}></SingleBlog>)
         }
  
        </div>
        <div className="mt-10  grid  justify-items-center">
          <Link ><button className="btn btn-wide bg-[#125294] text-white">Show More </button></Link> 
        </div>
      </div>
    );
};

export default Blog;