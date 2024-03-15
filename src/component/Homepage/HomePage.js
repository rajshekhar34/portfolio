import React, { useEffect } from 'react'
import './Homepage.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);

  
  return (
    <>

   
    <div id='Homepage' className='main'>
     <div className="container" >
     <div className=' top-[10%] relative h-[75%] menu:h-full after1100:static ' data-aos='fade-up' data-aos-once="true" >
    <div className="animated-text" >
    
    <div  className='w-7/12 h-full after1100:size-full after1100:text-center' >
    <h1 className=' text-6xl leading-snug md:text-4xl after1100:leading-snug'>Hi,<br/> I am <span className='myName'></span></h1>
    <h2 className=' after1100:text-3xl after1100:leading-snug'>Thanks for exploring <span className='firstLine'></span></h2>
     I'm familiar with  <span className='secondLine'></span><br/>

     <p className=' text-lg font-light text-gray-300 mt-6 after1100:text-center'>
     Hello there! I'm Rajshekhar Roy, a skilled web developer specializing in HTML, CSS, and JavaScript, with additional proficiency in Tailwind CSS and React. Currently deepening my knowledge in React, my portfolio showcases a dedication to precision and innovation. I'm open to connecting with professionals and discussing potential collaborations. Thanks for visiting !
    </p>
      <a href='https://drive.google.com/file/d/1fnKt9-f81g0Sj-EC-9DNyU0ctLnZenzQ/view' target='_blank'> <button className=' bg-white text-black shadow-2xl text-sm px-3 py-2 rounded-2xl hover:bg-gray-200 active:scale-95 transition-all mt-4'>Download Resume</button></a>
    </div>

   
     <img className='image' src='np'/>
     
     </div>
    
</div>
</div>

</div>

    
    </>
  )
}

export default HomePage

