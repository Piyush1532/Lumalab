import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Trustedby from './Components/Trustedby';
import Services from './Components/Services';
import Work from './Components/Work';
import Teams from './Components/Teams';
import Contactus from './Components/Contactus';
import {Toaster} from "react-hot-toast"


const App = () => {

// const [theme,setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") :"light" )
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

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
</div>

  )
}

export default App
