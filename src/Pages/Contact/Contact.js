import React, { useRef } from 'react';


import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();
        
    
        
        emailjs.sendForm('service_3n18a09', 'template_r8crkl8', form.current, 'A77XNdlWwg69QRhWg')
          .then((result) => {
              console.log(result.text);
            
              alert(' successfully done  ')
              form.current.reset()
              
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
    
        <div className='   flex justify-center items-center max-h-xs'>
           <div className='w-96  p-7'>
            <h1 className='font-bold text-2xl text-black text-center'>contact us</h1>
           <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="input input-bordered w-full max-w-xs" type="text" name="user_name" />
      <label>Email</label>
      <input className="input input-bordered w-full max-w-xs" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="input input-bordered w-full max-w-xs" name="message" />
      <input  className="btn btn-accent text-white bg-[#125294] w-full mt-5" type="submit" value="Send" />
    </form> 

           </div>
          
        </div>
    );
};

export default Contact;
