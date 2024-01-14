import React from 'react'

const Accordion2 = ({click,itemNum}) => {
  return (
    <>
     <div className='flex'>
        <h4 onClick={() => click(2)}>What is the maximum file upload size?</h4>
        <img onClick={() => click(2)}
        style={{rotate : itemNum ===2 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
        </div>
        { itemNum === 2 ?<p>No more than 2GB. All files in your account 
          must fit your allotted storage space.</p>: null}</>
  )
}

export default Accordion2