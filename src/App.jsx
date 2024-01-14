import { useState } from 'react'
import './App.css'
import Accordion from './components/Card/Accordion'
import Accordion2 from './components/Card/Accordion2'
import Accordion3 from './components/Card/Accordion3'
import Accordion4 from './components/Card/Accordion4'
import Accordion5 from './components/Card/Accordion5'




function App() {
  const [itemNum, setItemNum] = useState(null)


  const click = (clicknum) => {
    
      if(itemNum === clicknum){
        setItemNum(null)
      }else{
        setItemNum(clicknum)
      }
    
  }
  const img1 = "/assets/Group 4 (7).svg"
  const img2 = "/assets/Path Copy (4).svg"
  const h1 = 'FAQ'
  return (
    <>
    <div className='container'>
      <div>
        <img className='img1' src={img1} alt="" />
        <img className='img2' src={img2} alt="" />
      </div>
      <h1>{h1}</h1>
      <div className='accordion'>

      <Accordion
      itemNum={itemNum}
      click={click}
      />
       
       <Accordion2
       itemNum={itemNum}
       click={click}/>


       <Accordion3
       itemNum={itemNum}
       click={click}
       />

       <Accordion4
       itemNum={itemNum}
       click={click}
       />

       <Accordion5
       itemNum={itemNum}
       click={click}
       />

      </div>
    </div>
    </>
  )
}

export default App
