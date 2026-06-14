import { useState } from 'react'
import Navbar from './Components/1Navbar'
import Hero from './Components/2Hero'
import WorkshopDetails from './Components/3WorkshopDetails'
import LearningOutcomes from './Components/4LearningOutcomes'
import FaqSection from './Components/5FAQ'
import RegistarationForm from './Components/6RegistrationForm'
import Footer from './Components/7Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <WorkshopDetails/>
      <LearningOutcomes/>
      <FaqSection/>
      <RegistarationForm/>
      <Footer/>
    </>
  )
}

export default App
