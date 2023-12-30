import React, { useState } from 'react';
import './Maintxt3.css';

const Maintxt3 = () => {
  const [show, setShow] = useState(null);
  const h22 = 'How do I reset my password?'
  const image2 = "./assets/Path 2 (3).svg"
  const p = 'axali welia'

  return (
    <div>
      <div>
        <div className='maintxt3'>
          <h2>{h22}</h2>
          <img
            onClick={() => {
                if(show === 3){
                    setShow(null)
                }else{
                    setShow(3)
                }
            }}
            src= {image2}
            alt=""
          />
        </div>

        <div className='hiddenp3'>
          {show === 3 ? (
            <p>{p}</p>
          ) : null}
        </div>

        <div className='border3'></div>
      </div>
    </div>
  );
};

export default Maintxt3;