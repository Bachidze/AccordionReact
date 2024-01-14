import React from 'react'

const Accordion3 = ({click,itemNum}) => {
  return (
    <>
       <div className='flex'>
        <h4 onClick={() => click(3)}>How do I reset my password?</h4>
        <img onClick={() => click(3)}
        style={{rotate : itemNum ===3 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
          </div>
          {itemNum === 3 ?  <p>Be a Fit!!!</p>: null}</>
  )
}

export default Accordion3