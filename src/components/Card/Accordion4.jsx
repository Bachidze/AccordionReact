import React from 'react'

const Accordion4 = ({click,itemNum}) => {
  return (
   <>
        <div className='flex'>
        <h4 onClick={() => click(4)}>Can I cancel my subscription?</h4>
        <img onClick={() => click(4)}
        style={{rotate : itemNum ===4 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
        </div>
        {itemNum === 4 ?  <p>Be a Fit!!!</p>: null}
    </>
  )
}

export default Accordion4