import React from 'react'
import Navbar from './navbar'
import '../login.css'

function login() {
  return (
    <section>
    
       <Navbar/>

      <div id='login'>
       <div id='box'>
       <h2>Login</h2>

       <div>
         <h4>Email:</h4>
         <input type="text" id="lname"></input>
       </div>

       <div>
         <h4>Password:</h4>
         <input type="text" id="lname"></input>
       </div>

       <div>
         <p>Forgot password?</p>
         <p>signup</p>
       </div>
      </div>
     </div>
    </section>
  )
}

export default login