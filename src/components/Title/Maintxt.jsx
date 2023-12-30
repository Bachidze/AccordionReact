import React, { useState } from 'react';
import './Maintxt.css';
import Maintxt2 from '../Maintxt2/Maintxt2';
import Maintxt3 from '../Maintxt3/Maintxt3';
import Maintxt4 from '../Maintxt4/Maintxt4';
import Maintxt5 from '../Maintxt5/Maintxt5';

const Maintxt = () => {
  const [show, setShow] = useState(null);

  return (
    <div>
      <div className='maintxt'>
        <h2>How many team members can I invite?</h2>
        <img
          onClick={() => {
            if(show === 1){
                setShow(null)
            }else{
                setShow(1)
            }
          }}
          src="./assets/Path 2 (3).svg"
          alt=""
        />
      </div>

      <div className='hiddenp'>{show === 1 ? <p>Axali welia</p> : null}</div>

      <div className='border'></div>
      <Maintxt2 />
      <Maintxt3/>
      <Maintxt4/>
      <Maintxt5/>
    </div>
  );
};

export default Maintxt;
