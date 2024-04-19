import React from 'react'
import Navbar from './Components/Navbar/Nav'
import BG from './Components/BG/BG'
import AboutUs from './Components/AboutUs/AboutUs'
import AboutUs2 from './Components/AboutUS2/AboutUs2'
import Title from './Components/Title/Title'
import Newhere from './Components/Newhere/Newhere'
import Contact from './Components/Contact/Contact'


 

const App = () => {
  return (
    <div>
     <Navbar/>
     <BG/>
     <div className="container">
      <AboutUs/>
      <AboutUs2/>
      <Title subTitle='New Here?' title='Get to Know Us'/>
      <Newhere/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      
     </div>
     
    </div>
  )
}

export default App