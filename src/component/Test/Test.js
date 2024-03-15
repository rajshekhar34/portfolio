import React, { useRef } from 'react';
// import './image.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import one from './one.jpg'

function Test() {
  return(
    <>
    <div  className=' h-screen w-screen bg-red-950'>
    <h1 className=' text-white'>Hi therewfjskl</h1>
    </div>
    </>
  )

    // const sliderRef = useRef();

    // const nextSlide = () => {
    //   const slides = sliderRef.current.querySelectorAll('.slides');
    //   sliderRef.current.appendChild(slides[0].cloneNode(true));
    //   sliderRef.current.removeChild(slides[0]);
    // };
  
    // const prevSlide = () => {
    //   const slides = sliderRef.current.querySelectorAll('.slides');
    //   const lastSlide = slides[slides.length - 1];
    //   sliderRef.current.prepend(lastSlide.cloneNode(true));
    //   sliderRef.current.removeChild(lastSlide);
    // };
  
    // return (
    //     <>
    //   <div className="container">
    //     <div className="slider" ref={sliderRef}>
    //     <div className="slides" style={{ 'backgroundImage': 'url(/one.jpg)' }} alt=""></div>
    //       <div className="slides" style={{ '--img': 'url(two.jpg)' }}></div>
    //       <div className="slides" style={{ '--img': 'url(three.jpg)' }}></div>
    //       <div className="slides" style={{ '--img': 'url(four.jpg)' }}></div>
    //       <div className="slides" style={{ '--img': 'url(five.jpg)' }}></div>
    //       <div className="slides" style={{ '--img': 'url(six.jpg)' }}></div>
    //       <div className="slides" style={{ '--img': 'url(seven.jpg)' }}></div>
    //       <div className="slides" style={{ '--img': 'url(eight.jpg)' }}></div>
    //     </div>
    //     <div className="btn">
    //       <span className="prev" onClick={prevSlide}>
    //         <FontAwesomeIcon icon={faArrowLeft} />
    //       </span>
    //       <span className="next" onClick={nextSlide}>
    //         <FontAwesomeIcon icon={faArrowRight} />
    //       </span>
    //     </div>
    //   </div>
    //   </>
    // );
  };

export default Test