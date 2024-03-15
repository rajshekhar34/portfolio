import './App.css';
import Navbar from './component/Navbar/Navbar';
import HomePage from './component/Homepage/HomePage';
import Project from './component/Projects/Project';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Test from './component/Test/Test';


function App() {
  return (
    <>
        
          <Navbar />
          <HomePage />
         <Project />
        <About />
       <Contact />
     
    </>
  );
}

export default App;
