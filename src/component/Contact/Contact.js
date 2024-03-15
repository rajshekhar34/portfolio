import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
     <div id='Contact' className=' bg-gray-900 w-screen h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center absolute'>
    
        
    <img className='w-full h-full object-cover opacity-5 relative' src='https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

    
   
  
    <div className=' text-black rounded-3xl w-1/2 shadow-2xl z-20 overflow-hidden absolute transition-all after1100:w-5/6'  data-aos='zoom-in' data-aos-once="true">
     


    <h1 className=' text-black text-center text-3xl font-bold  bg-white p-4 rounded-t-3xl border-b-2 border-dotted border-y-yellow-600'>Contact Me</h1>

      <div className=' flex justify-center h-fit bg-white p-8 items-center'>
      
      <div className=' bg-green-600 rounded-3xl h-full p-14 flex flex-col justify-center gap-5'>
      
        <p className=' flex items-center gap-2 text-white'><FontAwesomeIcon className=' rounded-full p-2 border-white border-2 ' icon={faPhone}/>
        <a href='tel:+918116966256'>+91 8116966256</a></p>

        <p className=' flex items-center gap-2 text-white'><FontAwesomeIcon className=' rounded-full p-2 border-white border-2 ' icon={faEnvelope}/>
        <a href='mailto:rajshekharroy34@gmail.com?subject=We are hiring you&body=I feel you will be the best fit for the role'> rajshekharroy34@gmail.com</a></p>
      </div>
     
      <form className='  text-center flex flex-col items-center justify-center gap-5 bg-white w-full py-6'>
        <input className=' bg-white border rounded-md border-black h-10 w-2/3 p-6 outline-green-600 outline-2' type='text' placeholder='Enter Your Name' required/>
        <input className=' bg-white border rounded-md border-black h-10 w-2/3 p-6 outline-green-600 outline-2 ' type='email' placeholder='Enter Your Email' required/>
        <textarea className=' bg-white w-2/3 p-6 resize-none border rounded-md border-black outline-green-600 outline-2' placeholder='Your Message ' rows={4}/>
        <button className=' bg-gray-800 text-white p-4 rounded-3xl'>Submit Now</button>
      </form>
      
      </div>
    </div>
  
    </div>
        
    
    </>
  )
}

export default Contact