import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div id='About' className=' bg-gray-600 h-[calc(100vh-5rem)] w-screen p-8' >
      <div data-aos='zoom-in' data-aos-once="true">
    <h1 className=' text-6xl text-center'>About Me</h1>
    <p className=' text-center m-4'>I'm Rajshekhar Roy, a frontend developer passionate about crafting immersive digital experiences.</p>

<p>Background <br/>
Education: BSc in Mathematics (2021), Diploma in Web Development (2022)
Skills
My toolkit includes:

HTML, CSS, Tailwind CSS, JavaScript, React
Adobe Photoshop
Professional Journey
During my time as the Online Sales Manager at Delight Hotels Pvt. Ltd. (April 2023 - September 2023), I honed skills in online portal management, effective communication, and competitive analysis. While this role may seem unrelated, the experience taught me the importance of user engagement and delivering personalized solutions — valuable lessons I now apply to my frontend development projects.

Coding Adventures
From personal portfolio websites to e-commerce designs and popular platform clones, I've delved into a variety of projects that showcase my passion for coding and creativity.

Beyond the Screen
Outside the tech world, I'm a tech enthusiast exploring the latest innovations and a guitar enthusiast finding inspiration in musical creativity.

Let's connect! Whether you're looking to collaborate or just chat about tech trends, drop me a line at rajshekharroy34@gmail.com

</p>
</div>
    </div>
    </>
  )
}

export default About