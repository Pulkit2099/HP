import React from 'react'
import { NavLink } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../src/nav.css"
const Nav = () => {
  return (
    <>
 

    <div className="container-fluid nav_bg">
      <div className='row'>
        <div className="col-10 mx-auto">
            


 
    
    <nav className="navbar navbar-expand-lg  " id='Nav'>
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" to="/"> <h1>INSAID LABS</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="navbar">
          <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="navbar size=200px">
          <NavLink activeClassName='menu_active'   exact className="nav-link" to="/about">About</NavLink>
        </li>
        
        <li className="navbar">
          <NavLink   activeClassName='menu_active'  exact  className="nav-link" to="/service">Services</NavLink>
        </li>

        <li className="navbar">
          <NavLink  activeClassName='menu_active'  exact className="nav-link"    to="/contact">Contact</NavLink>
        </li>







 



    
      
      </ul>
   
    </div>
  </div>
</nav>
</div>
            
            </div>
            </div>

            

    
    </>
  )
}

export default Nav