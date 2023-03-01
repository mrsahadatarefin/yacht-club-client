import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider/ContextProvider';

const Reviews = () => {
    const {user,}=useContext(AuthContext)

    const handelReview =(event) =>{
   event.preventDefault()
   
   const form = event.target
   const name =form.name.value
   const message =form.message.value 
    console.log(name,message)
    const review ={
        name:name,
        message:message
       
    }
    console.log(review)
    fetch('https://yacht-club-server.vercel.app/reviews',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(review),
    })
    .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
    if(data.acknowledged === true ){
        alert('Review add successfully')
    }
    form.reset()
  })
  .catch((error) => {
    console.error("Error:", error);
  });

    }
    return (
        <div className='  mt-20  flex justify-center items-center max-h-xs'>
           <div className='w-96  p-7'>
            <h1 className='font-bold text-2xl text-black text-center'> ADD review</h1>
           <form  onSubmit={handelReview} >
      <label>Name</label>
      <input className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} name='name'  type="text"  readOnly />
      
      <label> Want to say</label>
      <textarea className="input input-bordered w-full max-w-xs h-20 " name="message" required />
     {
        user?.email? <input  className="btn btn-accent text-white bg-[#125294] w-full mt-5" type="submit" value="Add review"  />:
       <Link to='/login'> <input  className="btn btn-accent  text-white text-black bg-[#125294] w-full mt-5" type="submit" value="Review"  /></Link>
     }
    </form> 

           </div>
          
        </div>
    );
};

export default Reviews;