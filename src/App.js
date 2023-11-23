import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import YouTube from './components/Youtube'
import Features from './components/Features'
import Offerings from './components/Offerings'
import Why from './components/Why'
import Withdrawals from './components/Withdrawals'
import About from './components/About'
import Faq from './components/FAQ\'s/Faq'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <YouTube/>
      <Features/>
      <Offerings/>
      <About/>
      <Why/>
      <Withdrawals/>
      <Faq/>
    </div>
  )
}

export default App