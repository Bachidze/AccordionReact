import React, { useState } from 'react';
import './Maintxt2.css';

const Maintxt2 = () => {
  const [show, setShow] = useState(null);
  const h2 = 'What is the maximum file upload size?'
  const img3 = "./assets/Path 2 (3).svg"
  const pp = 'No more than 2GB. All files in your account must fit your allotted storage space.'

  return (
    <div>
      <div>
        <div className='maintxt2'>
          <h2>{h2}</h2>
          <img
            onClick={() => {
                if(show === 2){
                    setShow(null)
                }else{
                    setShow(2)
                }
            }}
            src={img3}
            alt=""
          />
        </div>

        <div className='hiddenp2'>
          {show === 2 ? (
            <p>{pp}</p>
          ) : null}
        </div>

        <div className='border2'></div>
      </div>
    </div>
  );
};

export default Maintxt2;

