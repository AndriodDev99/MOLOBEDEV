import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import BackTopBtn from './components/BackButton'
import './App.css'

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Contact/>
      <Footer />
      <BackTopBtn/>
    
    </div>
  )
}

export default App
