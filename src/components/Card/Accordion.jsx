import React from 'react'

const Accordion = ({click,itemNum}) => {
  return (
    <div>
    <div className='flex'>
   <h4 onClick={() => click(1)}>How many team members can I invite?</h4>
   <img onClick={() => click(1)}
    style={{rotate : itemNum ===1 ?'180deg': '',transition: '1s'}} 
    src="/assets/Path 2 (3).svg" alt="" />
   </div>
   {itemNum === 1 ?  <p>Be a Fit!!!</p>: null}
    </div>
  )
}

export default Accordion