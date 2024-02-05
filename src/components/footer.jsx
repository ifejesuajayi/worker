import React from 'react'
import '../footer.css'
import Logo from '../images/Logo.png'

function Footer() {
  return (
    <footer>
        <div className='footer-flex'>
          <div className="one">
                <h3>CASE STUDIES</h3>
                <p>ALL CASE STUDIES</p>
                <p>SaaS CASE STUDIES</p>
                <p>BLOGGER CASE STUDIES</p>
                <p>E-commerce</p>
          </div>
          <div className="two">
                <h3>BUSINESS IDEAS</h3>
                <p>MAKE MONEY BLOGGING</p>
                <p>E-commerce IDEAS</p>
                <p>START YOUR BUSINESS</p>
                <p>HOW TO FIND IDEAS</p>
                <p>TIKTOK BIO IDEAS</p>
                <p>LEARN SEO</p>
                <p>GROW YOUR BUSINESS</p>
          </div>
          <div className="three">
                <h3>MORE STUFF</h3>
                <p>SHARE YOUR STORY</p>
                <p>ABOUT US</p>
                <p>ADVERTISE WITH US</p>
                <p>IMPACT</p>
          </div>
        </div>

        <a className='brand' href='#'><img src={Logo} alt=''/></a> 
    </footer>
  )
}

export default Footer