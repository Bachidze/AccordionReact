import React, { useState } from 'react';
import './Maintxt4.css'

const Maintxt4 = () => {
  const [show, setShow] = useState(null);
  const h2 = 'Can I cancel my subscription?'
  const img = "./assets/Path 2 (3).svg"
  const p = 'Axali welia'
  return (
    <div>
      <div>
        <div className='maintxt4'>
          <h2>{h2}</h2>
          <img
            onClick={() => {
                if(show === 4){
                    setShow(null)
                }else{
                    setShow(4)
                }
            }}
            src={img}
            alt=""
          />
        </div>

        <div className='hiddenp4'>
          {show === 4 ? (
            <p>{p}</p>
          ) : null}
        </div>

        <div className='border4'></div>
      </div>
    </div>
  );
};

export default Maintxt4;