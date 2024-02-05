import React from 'react'
import Img1 from '../images/connect1.png'
import Img2 from '../images/connect2.png'
import Img3 from '../images/connect3.png'
import '../connect.css'

function Connect() {
  return (
    <section>
      <div className="connect-grid">
        <div className='img-one'>
          <img src={Img1} alt="" />
        </div>
        <div className='img-two'>
          <img src={Img2} alt="" />
        </div>
        <div className='img-three '>
          <img src={Img3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Connect