import './App.css';
import gif from './cat3.mp4';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function No2() {
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
    navigate('/no3')
  }
  return (
    <div className="App">
      <div className='gif'>
      <video autoPlay loop muted>
        <source src={gif} type="video/mp4">
          </source>
      </video>
        <div className='question'>
          <h1>aak aur baar soch lo..!</h1>
          <p>kyu aise kar rahe ho?</p>
          <div className='button'>
            {!clicked ? (
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

export default No2;
