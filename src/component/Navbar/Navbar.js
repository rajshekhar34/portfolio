import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/Logo1.png';

function Navbar() {
  const [showMenu , setShowMenu] = useState(false)
  return (
    <>
    
    <nav className='h-20 w-screen mx-auto px-4 flex items-center justify-between sticky top-0 z-50 bg-gray-800 shadow-2xl'>
        <Link to='Homepage' smooth={true} duration={500} offset={-100}><img src={logo} alt='' className='object-cover h-16 w-auto cursor-pointer md:h-12 transition-all duration-200'/></Link>


        <div className='menu:hidden'>

      
          
            <Link activeClass='text-orange-400' to='Homepage'spy={true} smooth={true} offset={-100} duration={500} className='  m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-orange-400 hover:border-b-2 border-orange-400'>Home</Link>

       
            <Link activeClass='text-orange-400' to='Projects'spy={true} smooth={true} offset={-80} duration={500} className='m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-orange-400 hover:border-b-2 
            border-orange-400'>My Projects</Link>

            <Link activeClass='text-orange-400' to='About'spy={true} smooth={true} offset={-80} duration={500} className='m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-orange-400 hover:border-b-2 border-orange-400'>About</Link>

            <Link activeClass='text-orange-400' to='Contact'spy={true} smooth={true} offset={-80} duration={500} className='m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-orange-400 hover:border-b-2 border-orange-400'>Contact Me</Link>   
        </div>





      <img className=' h-9 hidden menu:block absolute right-6' src='https://pic.onlinewebfonts.com/thumbnails/icons_520301.svg' onClick={()=>setShowMenu(!showMenu)}/>

      
        <div className=' flex flex-col absolute top-20 right-10 text-center bg-gray-600 border-gray-400 border-4 shadow-2xl w-1/2 rounded-2xl invisible menu:visible' style={{display : showMenu? 'flex':'none'} }>
          
<Link activeClass='text-cyan-400' to='Homepage'spy={true} smooth={true} offset={-100} duration={500} className='rounded-3xl bg-black p-2 border-2 border-solid border-black m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-cyan-400 hover:border-b-2' onClick={()=>setShowMenu(false)}>Home</Link>


<Link activeClass='text-cyan-400' to='Projects'spy={true} smooth={true} offset={-80} duration={500} className='rounded-3xl bg-black p-2 border-2 border-solid border-black m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-cyan-400 hover:border-b-2 
' onClick={()=>setShowMenu(false)}>My Projects</Link>

<Link activeClass='text-cyan-400' to='About'spy={true} smooth={true} offset={-80} duration={500} className='rounded-3xl bg-black p-2 border-2 border-solid border-black m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-cyan-400 hover:border-b-2 ' onClick={()=>setShowMenu(false)}>About</Link>

<Link activeClass='text-cyan-400' to='Contact'spy={true} smooth={true} offset={-80} duration={500} className='rounded-3xl bg-black p-2 border-2 border-solid border-black m-4 cursor-pointer transition-all duration-100 ease-in-out hover:text-cyan-400 hover:border-b-2 ' onClick={()=>setShowMenu(false)}>Contact Me</Link>   
</div>


   <Link to='Contact' smooth={true} duration={1000}> <button className='bg-white text-black rounded-full px-4 mr-8 text-lg flex items-center justify-center transition-all duration-200 ease-in-out  hover:text-cyan-400 hover:bg-black active:scale-95 md:scale-90 menu:hidden ' >Hire Me</button></Link>

    </nav>

    
    </>
  )
}

export default Navbar