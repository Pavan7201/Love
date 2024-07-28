import './App.css';
import gif from './cat2.mp4';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function No1() {
  const [Clicked, setclicked] = useState(false);
  const Navigate = useNavigate()
  const handleYesClick = () => {
    setclicked(true);
    Navigate('/yes')
  }
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()
  const handleNoClick = () => {
    setClicked(true);
    navigate('/no2')
  }
  return (
    <div className="App">
      <div className='gif'>
      <video autoPlay loop muted>
        <source src={gif} type="video/mp4">
          </source>
      </video>
        <div className='question'>
          <h1>Please Think again!</h1>
          <p>Itna jaldi bhi matt bolo...</p>
          <div className='button'>
          {!Clicked ? (
              <button onClick={handleYesClick}>Yes</button>
            ) :(<p></p>)}
            {!clicked ? (
              <button onClick={handleNoClick}>No</button>
            ) :(<p></p>)}
            </div>
        </div>
      </div>
    </div>
    ); 
}

export default No1;
