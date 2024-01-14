import { useState } from 'react'
import './App.css'




function App() {
  const [itemNum, setItemNum] = useState(null)

  return (
    <>
    <div className='container'>
      <h1>FAQ</h1>
      <div className='accordion'>

        <div className='flex'>
        <h4 onClick={() =>{
          if(itemNum === 1){
            setItemNum(null)
          }else{
            setItemNum(1)
          }
        } }>How many team members can I invite?</h4>
        <img onClick={() => 
        {
          if(itemNum === 1){
            setItemNum(null)
          }else{
            setItemNum(1)
          }
        }}
         style={{rotate : itemNum ===1 ?'180deg': '',transition: '1s'}} 
         src="/assets/Path 2 (3).svg" alt="" />
        </div>
        {itemNum === 1 ?  <p>Be a Fit!!!</p>: null}

        <div className='flex'>
        <h4 onClick={() => 
        {
          if(itemNum === 2){
            setItemNum(null)
          }else{
            setItemNum(2)
          }
        }}>What is the maximum file upload size?</h4>
        <img onClick={() => 
        {
          if(itemNum === 2){
            setItemNum(null)
          }else{
            setItemNum(2)
          }
        }}
        style={{rotate : itemNum ===2 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
        </div>
        { itemNum === 2 ?<p>No more than 2GB. All files in your account 
          must fit your allotted storage space.</p>: null}


          <div className='flex'>
        <h4 onClick={() => 
        {
          if(itemNum === 3){
            setItemNum(null)
          }else{
            setItemNum(3)
          }
        }}>How do I reset my password?</h4>
        <img onClick={() => 
        {
          if(itemNum === 3){
            setItemNum(null)
          }else{
            setItemNum(3)
          }
        }}
        style={{rotate : itemNum ===3 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
          </div>
          {itemNum === 3 ?  <p>Be a Fit!!!</p>: null}

        <div className='flex'>
        <h4 onClick={() => 
        {
          if(itemNum === 4){
            setItemNum(null)
          }else{
            setItemNum(4)
          }
        }}>Can I cancel my subscription?</h4>
        <img onClick={() => 
        {
          if(itemNum === 4){
            setItemNum(null)
          }else{
            setItemNum(4)
          }
        }}
        style={{rotate : itemNum ===4 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
        </div>
        {itemNum === 4 ?  <p>Be a Fit!!!</p>: null}

        <div className='flex'>
        <h4 onClick={() => 
        {
          if(itemNum === 5){
            setItemNum(null)
          }else{
            setItemNum(5)
          }
        }}>Do you provide additional support?</h4>
        <img onClick={() => 
        {
          if(itemNum === 5){
            setItemNum(null)
          }else{
            setItemNum(5)
          }
        }}
        style={{rotate : itemNum ===5 ?'180deg': '',transition: '1s'}} src="/assets/Path 2 (3).svg" alt="" />
        </div>
        {itemNum === 5 ?  <p>Be a Fit!!!</p>: null}

      </div>
    </div>
    </>
  )
}

export default App
