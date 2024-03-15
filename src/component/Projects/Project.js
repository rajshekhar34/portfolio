// import React from 'react'
// import image1 from './image1.jpg'
// // import image2 from './image2.jpg'
// // import image3 from './image3.jpg'
// // import image4 from './image4.jpg'
// // import image5 from './image5.jpg'
// // import image6 from './image6.jpg'
// // import image7 from './image7.jpg'
// // import image8 from './image8.jpg'

// function Project() {
//   return (
//     <>
//     <div id='Projects' className=' bg-gray-900 w-screen h-[calc(100vh-5rem)] '>
//       <div className=' h-[calc(100vh-5rem)] w-full border-blue-600 border-8 absolute overflow-hidden overflow-y-scroll no-scrollbar'>
//     <h1 className='text-6xl text-center   relative mt-12 border-purple-700 border-8 w-fit left-1/2 -translate-x-1/2 '>Here is the project section</h1>

//     <div className=' w-[calc(100vw-30%)] p-0 left-1/2 border-red-500 border-2 -translate-x-1/2 relative  flex flex-wrap gap-10 items-center justify-center pt-8 pb-8'>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//       <div className=' h-72 w-60 bg-slate-400'><img className=' h-full w-full object-cover' src={image1}/></div>
//     </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Project



import React, { useEffect } from 'react';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div id='Projects' className='bg-gray-900 w-screen h-[calc(100vh-5rem)]'>
        <div className='h-[calc(100vh-5rem)] w-full absolute overflow-hidden overflow-y-scroll no-scrollbar bg-cover bg-center' >
          
          <div data-aos='fade-up' data-aos-once="true">
          <h1 className='text-6xl text-center relative mt-12 w-fit left-1/2 -translate-x-1/2'>
            My Projects
          </h1></div>

          {/* <div className='w-1/2 left-1/2 -translate-x-1/2 relative flex flex-wrap gap-8 items-center justify-center pt-8 pb-8 border-red-600 border-8'> */}
          <div className=' w-fit h-fit left-1/2 -translate-x-1/2 relative grid grid-cols-3 grid-rows-2 p-10'>
            {/* div1 */}
            <div className='group rounded-2xl overflow-hidden h-[30vmin] w-[35vmin] m-4 bg-slate-400' data-aos='zoom-in' data-aos-once="true">
            <p className=' p-8 ease-in-out duration-500 absolute inset-0 flex items-center justify-evenly flex-col bg-opacity-65 translate-y-[30vmin] transition-all bg-black h-full w-full text-white group-hover:translate-y-0 '>
            Unlock creativity with our site's API-driven stock images for an instant visual upgrade.
            <a href='https://rajshekhar34.github.io/image_gen/' target='_blank'><button className=' bg-teal-700 p-2 px-8 rounded-2xl transition-all hover:bg-teal-600 '>View</button></a>
            </p>
              <img className=' h-full w-full object-cover' src={image1} alt='Image 1' />
            </div>
            {/* div2 */}
            <div className='group rounded-2xl overflow-hidden h-[30vmin] w-[35vmin] m-4 bg-slate-400'  data-aos='zoom-in' data-aos-once="true">
            <p className=' p-8 ease-in-out duration-500 absolute inset-0 flex items-center justify-evenly flex-col bg-opacity-65 translate-y-[30vmin] transition-all bg-black h-full w-full text-white group-hover:translate-y-0'>
            Quiz, learn, and challenge yourself on our dynamic site for a quick knowledge boost!
            <a href='https://rajshekhar34.github.io/quiz_project/' target='_blank'><button className=' bg-teal-700 p-2 px-8 rounded-2xl transition-all hover:bg-teal-600'>View</button></a>
            </p>
              <img className='h-full w-full object-cover ' src={image2} alt='Image 2' />
            </div>
            {/* div3 */}
            <div className='group rounded-2xl overflow-hidden h-[30vmin] w-[35vmin] m-4 bg-slate-400' data-aos='zoom-in' data-aos-once="true">
            <p className=' p-8 ease-in-out duration-500 absolute inset-0 flex items-center justify-evenly flex-col bg-opacity-65 translate-y-[30vmin] transition-all bg-black h-full w-full text-white group-hover:translate-y-0 '>
            Shop effortlessly at our e-commerce hub, where quality meets convenience. Explore curated collections and find the perfect items with just a click
            <a href='https://rajshekhar34.github.io/ecom/ ' target='_blank'><button className=' bg-teal-700 p-2 px-8 rounded-2xl transition-all hover:bg-teal-600'>View</button></a>
            </p>
              <img className='h-full w-full object-cover' src={image3} alt='Image 3' />
            </div>
            {/* div4 */}
            <div className='group rounded-2xl overflow-hidden h-[30vmin] w-[35vmin] m-4 bg-slate-400' data-aos='zoom-in' data-aos-once="true">
            <p className=' p-8 ease-in-out duration-500 absolute inset-0 flex items-center justify-center bg-opacity-65 translate-y-[30vmin] transition-all bg-black h-full w-full text-white group-hover:translate-y-0 '>
            This is the description of the project
            </p>
              <img className='h-full w-full object-cover' src={image1} alt='Image 4' />
            </div>
            {/* div5 */}
            <div className='group rounded-2xl overflow-hidden h-[30vmin] w-[35vmin] m-4 bg-slate-400' data-aos='zoom-in' data-aos-once="true">
            <p className=' p-8 ease-in-out duration-500 absolute inset-0 flex items-center justify-center bg-opacity-65 translate-y-[30vmin] transition-all bg-black h-full w-full text-white group-hover:translate-y-0 '>
            This is the description of the project
            </p>
              <img className='h-full w-full object-cover' src={image1} alt='Image 5' />
            </div>
            {/* div6 */}
            <div className='group rounded-2xl overflow-hidden h-[30vmin] w-[35vmin] m-4 bg-slate-400' data-aos='zoom-in' data-aos-once="true">
            <p className='p-8 ease-in-out duration-500 absolute inset-0 flex items-center justify-center bg-opacity-65 translate-y-[30vmin] transition-all bg-black h-full w-full text-white group-hover:translate-y-0 '>
            This is the description of the project
            </p>
              <img className='h-full w-full object-cover' src={image1} alt='Image 6' />
            </div>
            {/* <div className=' h-[30vmin] w-[25vmin] mb-4 bg-slate-400'>
              <img className='h-full w-full object-cover' src={image1} alt='Image 7' />
            </div>
            <div className=' h-[30vmin] w-[25vmin] mb-4 bg-slate-400'>
              <img className='h-full w-full object-cover' src={image1} alt='Image 8' />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
