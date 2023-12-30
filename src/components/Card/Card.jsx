import React from 'react'
import './Card.css'
import Maintxt from '../Title/Maintxt'



const Card = (props) => {
  const img1 = "/assets/Group 4 (7).svg"
  const img2 = "/assets/Path Copy (4).svg"
  const h1 = 'FAQ' 

  return (
    
    <div className='first'>
        <img className='img1' src={img1} alt="" />
        <img className='img2' src={img2} alt="" />
        <div className='title'>
            <h1>{h1}</h1>
         </div>
         <div className='title'>
          <Maintxt/>
         </div>
    </div>
    
  )
}

export default Card