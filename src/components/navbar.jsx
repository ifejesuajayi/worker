import React from 'react'
import Logo from '../images/Logo.png'
import ProfileImg from '../images/Profile.png'
import ProfileCount from '../images/ProfileCount.png'
import '../navbar.css'

function Navbar() {
  return (
    <nav>
      <a className='brand' href='#'><img src={Logo} alt=''/></a> 

       <ul className='nav-menu'>
         <li className='nav-item'> <a href='#' className='nav-link'> About Us </a> </li>
         <li className='nav-item'> <a href='#' className='nav-link'> Learn More </a> </li>
         <li className='nav-item'> <a href='#' className='nav-link'> Login </a> </li>
         <li className='nav-item'> <a href='#' className='nav-link'> Sign Up </a> </li>
         <li className='nav-item'> <a href='#' className='nav-link'> <img className='profile-img' src={ProfileImg} alt='' /></a> </li>
         <li className='nav-item'> <a href='#' className='nav-link'> <img className='profile-count' src={ProfileCount} alt='' /></a> </li>
       </ul>
    </nav>
  )
}

export default Navbar