import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Trustedby from './Components/Trustedby';
import Services from './Components/Services';
import Work from './Components/Work';
import Teams from './Components/Teams';
import Contactus from './Components/Contactus';
import {Toaster} from "react-hot-toast"
import Footer from './Components/Footer';


const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );


  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const customPointer = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (evt) => {
      customPointer.current.x = evt.clientX;
      customPointer.current.y = evt.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      position.current.x += (customPointer.current.x - position.current.x) * 0.1;
      position.current.y += (customPointer.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${position.current.x - 6}px, ${position.current.y -  6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x -20}px, ${position.current.y -20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}, [theme]);


  return (
<div className=' dark:bg-gray-900/100 transition-colors duration-300 relative min-h-screen'> 
<Toaster/>
  <Navbar theme={theme} setTheme={setTheme} /> 
  <Hero/>
  <Trustedby/>
<Services/>
  <Work/>
  <Teams/>
<Contactus/>
<Footer theme={theme}/>


{/* custom cursor div */}
   <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-[#6200de] pointer-events-none z-[9999]"

      />
      <div
        ref={dotRef}
        className='fixed top-0 left-0 h-3 w-3 rounded-full bg-[#6200de] pointer-events-none z-[9999]'

      />

</div>



  )
}

export default App
