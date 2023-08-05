import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';


const Newsletter = () => {
  const form = useRef()

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fitwl5g', 'template_ktrmu05', form.current, 'T2vdBL_qvbgD23xAb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
   
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <form className="flex items-center" ref={form} onSubmit={sendEmail}>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              name="user_email"
              placeholder='Enter Email'
            />
            
            <button className='bg-[#FF4820] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'
            
            >
              Notify Me
            </button>
            </form>
            
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
