import React from 'react'
import Navbar from "./navbar";
import '../signupoption.css'


function signupoption() {
  return (
    <>
    <Navbar/>

    <div id='options'>
       <div id='box-2'>
         <button>Sign up as customer</button> <br></br>
         <button>Sign up as artisan</button>
       </div>
     </div>
    </>
  )
}

export default signupoption