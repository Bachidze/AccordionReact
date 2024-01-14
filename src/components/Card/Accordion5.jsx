import React from 'react'

const Accordion5 = ({click,itemNum}) => {
  return (
   <>
           <div className='flex'>
        <h4 onClick={() => click(5)}>Do you provide additional support?</h4>
        <img onClick={() => click(5)}
        style={{rotate : itemNum ===5 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
        </div>
        {itemNum === 5 ?  <p>Be a Fit!!!</p>: null}
    </>
  )
}

export default Accordion5