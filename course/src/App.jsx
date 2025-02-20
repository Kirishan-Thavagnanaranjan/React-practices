import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './Footer'
import html from "./assets/HTML.jpg"
import css from "./assets/css.jpg"
import js from "./assets/js.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Course name = "HTML FULL Course" price ="$199" image={html}/>
    <Course name = "CSS FULL Course" price ="$199" image={css}/>
    <Course name = "JS FULL Course" price ="$199" image={js}/>
  
    </>
  )
}

export default App
