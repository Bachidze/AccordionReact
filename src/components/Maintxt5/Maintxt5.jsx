import React, { useState } from 'react';
import './Maintxt5.css'

const Maintxt5 = () => {
  const [show, setShow] = useState(null);
  const h2 = 'Do you provide additional support?'
  const img = "./assets/Path 2 (3).svg"
  const p = 'axali welia'

  return (
    <div>
      <div>
        <div className='maintxt5'>
          <h2>{h2}</h2>
          <img
            onClick={() => {
                if(show === 5){
                    setShow(null)
                }else{
                    setShow(5)
                }
            }}
            src={img}
            alt=""
          />
        </div>

        <div className='hiddenp5'>
          {show === 5 ? (
            <p>{p}</p>
          ) : null}
        </div>

        <div className='border5'></div>
      </div>
    </div>
  );
};

export default Maintxt5;