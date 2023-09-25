import './App.css';
import { useState } from 'react';

function App() {
  const [screen, SetScreen] = useState('Instrument')
  function audioCheck(event) {
    const audioId = event.target.innerText;
    const audio = document.getElementById(audioId);
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      SetScreen(drumPadDescriptions[audioId] || "Instrument")
  }
  
  function handleTrigger(elementId) {
    console.log("elementId", elementId)
    const audio = document.getElementById(elementId);
    
    if (audio) {
      // if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      // }
    }
    
  
  }
  
  document.addEventListener('keypress', event => {
    const lowerKey = event.key.toLowerCase()
    const upperKey = event.key.toUpperCase()
    switch(lowerKey){
      case "q":
      case "w":
      case "e":
      case "a":
      case "s":
      case "d":
      case "z":
      case "x":
      case "c":
        handleTrigger(upperKey)
        break;
      default: 
      console.log("You have pressed key: ", event.key)
      break;
    }
  });

  const drumPadDescriptions = {
    'Q': 'Heater 1',
    'W': 'Heater 2',
    'E': 'Heater 3',
    'A': 'Heater 4',
    'S': 'Clap',
    'D': 'Open-HH',
    'Z': 'Kick-n\'-Hat',
    'X': 'Kick',
    'C': 'Closed-HH',
  };

  return (
    <div className="App">
      <header className="App-header">

        <div id="drum-machine">
          <div id='display'>{screen}</div>

          <div className='drum-pad' id='heater-1' onClick={audioCheck}>
            {'Q'}
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>

          <div className='drum-pad' id='heater-2' onClick={audioCheck}>
            {'W'}
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
          </div>

          <div className='drum-pad' id='heater-3' onClick={audioCheck}>
            {'E'}
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
          </div>

          <div className='drum-pad' id='heater-4' onClick={audioCheck}>
            {'A'}
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
          </div>

          <div className='drum-pad' id='heater-6' onClick={audioCheck}>
            {'S'}
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          </div>

          <div className='drum-pad' id='drums-dsc' onClick={audioCheck}>
            {'D'}
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          </div>

          <div className='drum-pad' id='kick-n-hat' onClick={audioCheck}>
            {'Z'}
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          </div>

          <div className='drum-pad' id='kick-1' onClick={audioCheck}>
            {'X'}
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          </div>

          <div className='drum-pad' id='cev' onClick={audioCheck}>
            {'C'}
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
