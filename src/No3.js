import './App.css';
import gif from './cat4.mp4';
import React, { useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

function No3() {
    const [Clicked, setclicked] = useState(false);
    const Navigate = useNavigate()
    const handleYesClick = () => {
    setclicked(true);
    Navigate('/yes')
  }

  const [noButtonPosition, setNoButtonPosition] = useState({ top: null, left: null });
  const noButtonRef = useRef(null);
  const moveButton = () => {
    const newTop = Math.random() * 80 + 10 + '%';
    const newLeft = Math.random() * 80 + 10 + '%';
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="App">
      <div className='gif'>
        <video autoPlay loop muted>
          <source src={gif} type="video/mp4" />
        </video>
        <div className='question'>
          <h1>Baby Man jao na! Kitna bhav Khaogi!</h1>
          <p>Bhaut galt baat hein yaar</p>
          <div className='button'>
          {!Clicked ? (
              <button onClick={handleYesClick}>Yes</button>
            ) :(<p></p>)}
            <button 
              ref={noButtonRef}
              style={{ 
                position: noButtonPosition.top === null ? 'relative' : 'absolute', 
                top: noButtonPosition.top, 
                left: noButtonPosition.left 
              }} 
              onClick={moveButton}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default No3;
