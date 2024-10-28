import './App.css'
import HeadCarousel from './Components/HeadCarousel'
import Courses from './Components/Courses'
import Education from './Components/Education'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import AccordionUsage from './Components/Acordion'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <HeadCarousel />
      <Carousel/>
      <Courses />
      <AccordionUsage />
      <Footer />

    </>
  )
}

export default App