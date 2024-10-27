import './App.css'
import Acordion from './Components/Acordion'
import HeadCarousel from './Components/HeadCarousel'
import Courses from './Components/Courses'
import Education from './Components/Education'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <HeadCarousel />
      <Carousel/>

      <Courses />
      <Acordion />

    </>
  )
}

export default App