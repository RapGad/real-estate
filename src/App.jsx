
import './App.css'
import Home from './components/Home'
import Hero from './components/Hero/Hero'
import Featured from './components/Featured/Featured'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonial'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
   {/*  <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router> */}

    <Hero/>
    <Featured/>
    <About />
    <Testimonials />
    <Contact />

    </div>
  )
}

export default App
