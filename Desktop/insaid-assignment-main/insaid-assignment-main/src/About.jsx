import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/OIP.jpeg"
import Common from './Common'
const About = () => {
   
  return (
   <>
  <Common     name ="Welcome to about page "  say="About"  imgsrc={web} visit="/contact" btname="Contact Us"/>
   
   
   
   </>
  )
}

export default About