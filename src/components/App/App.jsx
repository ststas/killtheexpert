import { useState, useCallback, useEffect } from "react";
import Contexts from '../../contexts/Contexts';
import Header from "../Header/Header";
import Canvas from "../Canvas/Canvas";
import InfoTooltip from "../InfoToolTip/InfoToolTip";


function App() {
  const [counter, setCounter] = useState(0);
  const [countdown, setCountdown] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const [figureVisible, setFigureVisible] = useState('figure_invisible')
  const [popupType, setPopupType] = useState('popup-start')
  const [timerProperties, setTimerProperties] = useState(["timer__background", "timer__text"])
  const [firstUpdate, setFirstUpdate] = useState(false)

  

  function getRandomizer() {
    return Math.random().toFixed(2)
  };

  const finalCountdown = useCallback( ()=>{
    setCountdown(countdown - 1)
  },[countdown, setCountdown]);

  
  useEffect(() => {
    if(firstUpdate) {
  
      if(countdown > 5) {
        setTimerProperties(["timer__background", "timer__text"])
      }
      if (countdown <= 5 ) {
        setTimerProperties(["timer__background-red", "timer__text-red"])
      }
      if (countdown === 0) {
        setIsOpen(true)
        setFigureVisible('figure_invisible')
      }
      else {
        const timeoutId = setInterval(() => {
          finalCountdown();
        }, 1000);
  
        return () => {
          
          clearTimeout(timeoutId);
        }
      }
    }
    
  }, [finalCountdown, countdown, firstUpdate]);

  
  return (
    <Contexts
      counter={counter}
      setCounter={setCounter}
      getRandomizer={getRandomizer}
      countdown={countdown}
      setCountdown={setCountdown}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      figureVisible={figureVisible}
      setFigureVisible={setFigureVisible}
      popupType={popupType}
      setPopupType={setPopupType}
      timerProperties={timerProperties}
      setTimerProperties={setTimerProperties}
      setFirstUpdate={setFirstUpdate}
    >
      <div className="page">
        <InfoTooltip/>
        <Header/>
        <Canvas/>
      </div>
    </Contexts>
  );
}

export default App;