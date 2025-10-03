import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';

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
<div className='dark:bg-dark relative min-h-screen'> 
  <Navbar theme={theme} setTheme={setTheme} /> 
  <Hero/>
</div>

  )
}

export default App
