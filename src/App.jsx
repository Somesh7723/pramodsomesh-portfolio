import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="mainContainer">
      <Header />
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
