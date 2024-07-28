import './App.css';
import gif from './cat5.mp4';


function Yes() {
  return (
    <div className="App">
      <div className='gif'>
      <video autoPlay loop muted>
        <source src={gif} type="video/mp4">
          </source>
      </video>
        <div className='question'>
          <h1>Hehehehee! I knew it, Love you a lot...💗  </h1>
        </div>
      </div>
    </div>
    ); 
}

export default Yes;
