import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/images/R.png'


const Card = (props) => {
  return (
    



 <div className='col-md-4 col-10 mx-auto' id='crd'>
    <div class="card" >
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body" id='crd'>
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}.</p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
  
</div>
    </div>






  )
}

export default Card