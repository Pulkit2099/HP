import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/R.png"
import Common from './Common'
const Home = () => {
   
  return (
   <>
   <Common name ="Talk About Bussiness with    " say="Home" imgsrc={web} visit="/service" btname="Get Started "/>
   
   
   
   
   </>
  )
}

export default Home