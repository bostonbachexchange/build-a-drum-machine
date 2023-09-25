import './App.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
function App() {
  const [screen, SetScreen] = useState('Instrument')
  const [colorState, setColorState] = useState({
    redOne: 0,
    redTwo: 100,
    greenOne: 0,
    greenTwo: 100,
    blueOne: 0,
    blueTwo: 100,
  })

  function randomColor() {
  
    const newred = Math.floor(Math.random() * 255)
    const newgreen = Math.floor(Math.random() * 255)
    const newblue = Math.floor(Math.random() * 255)
    const newredTwo = Math.floor(Math.random() * 255)
    const newgreenTwo = Math.floor(Math.random() * 255)
    const newblueTwo = Math.floor(Math.random() * 255)

    console.log(newred, newgreen, newblue)
    setColorState({
    redOne: newred,
    greenOne: newgreen,
    blueOne: newblue,
    redTwo: newredTwo,
    greenTwo: newgreenTwo,
    blueTwo: newblueTwo
    })
    console.log('color', colorState)
  }

  

  function audioCheck(event) {
    const audioId = event.target.innerText;
    const audio = document.getElementById(audioId);
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      console.log("drumPadDescriptions[audioId]", drumPadDescriptions)
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
    SetScreen(drumPadDescriptions[elementId] || "Instrument")

    randomColor()
  
  }
  useEffect(() => {
    // Add event listener for keypress when the component mounts
    document.addEventListener('keypress', handleKeyPress);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  function handleKeyPress(event) {  // document.addEventListener('keypress', event => {
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
  };

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

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '300px',
    margin: "12px"
  }

  const keyStyle ={
    border: '1px solid white',
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const backgroundColorState = {
    background: `linear-gradient(90deg, rgb(${colorState.redOne}, ${colorState.greenOne}, ${colorState.blueOne}), rgb(${colorState.redTwo}, ${colorState.greenTwo}, ${colorState.blueTwo}))`
  };

 
  return (
    <div className="App">
      <header className="App-header" style={backgroundColorState}>

        <div id="drum-machine" style={{backgroundColor: 'silver', padding: "20px", color: 'black', borderRadius: '8px'}} transition={{ duration: 3 }}>
          <div id='display'>{screen}</div>
          <Container fluid >
            
            <div style={rowStyle}>
              <div >
            <div className='drum-pad' id='heater-1' onClick={audioCheck} style={keyStyle}>
              {'Q'}
              <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            </div>
              </div>
              <div >
                <div className='drum-pad' id='heater-2' onClick={audioCheck} style={keyStyle}>
                  {'W'}
                  <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                </div>
              </div>
              <div>
                <div className='drum-pad' id='heater-3' onClick={audioCheck} style={keyStyle}>
                  {'E'}
                  <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                </div>
              </div>
            </div>
          <div style={rowStyle}>
            <div>
              <div className='drum-pad' id='heater-4' onClick={audioCheck} style={keyStyle}>
                {'A'}
                <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
              </div>
            </div>
            <div>
              <div className='drum-pad' id='heater-6' onClick={audioCheck} style={keyStyle}>
                {'S'}
                <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
              </div>
            </div>
            <div>
              <div className='drum-pad' id='drums-dsc' onClick={audioCheck} style={keyStyle}>
                {'D'}
                <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
              </div>
            </div>

          </div>
          <div style={rowStyle}>
            <div>
            <div className='drum-pad' id='kick-n-hat' onClick={audioCheck} style={keyStyle}>
              {'Z'}
              <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            </div>
            </div>
            <div>
              <div className='drum-pad' id='kick-1' onClick={audioCheck} style={keyStyle}>
                {'X'}
                <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
              </div>
            </div>
            <div>
              <div className='drum-pad' id='cev' onClick={audioCheck} style={keyStyle}>
                {'C'}
                <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
              </div>
            </div>
          </div>
          </Container>

        </div>
      </header>
    </div>
  );
}

export default App;
