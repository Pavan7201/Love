import './App.css';
import gif from './cat1.mp4';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
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
    navigate('/no1');
  };

  
  return (
    <div className="App">
      <div className='gif'>
      <video autoPlay loop muted>
        <source src={gif} type="video/mp4">
          </source>
      </video>
        <div className='question'>
          <h1>Do you Love me❓  </h1>
          <div className='button'>
            {!Clicked? (
              <button onClick={handleYesClick}>Yes</button>
            ) :(<h1>.</h1>)}
            {!clicked ? (
              <button onClick={handleNoClick}>No</button>
            ) :(<h1>.</h1>)}
            </div>
        </div>
      </div>
    </div>
    ); 
}

export default App;
