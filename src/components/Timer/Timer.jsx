import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import TimerImage from "../../images/timer.svg"

function Timer () {
  const { countdown, timerProperties } = useContext(GeneralContext)

  return (
    <div className={`timer ${timerProperties[0]}`}>
      <img src={TimerImage} alt="timer" className="timer__image"/>
      <p className={`${timerProperties[1]}`}>{countdown < 10 ? `00:0${countdown}` :`00:${countdown}`}</p>
    </div>
  )
}

export default Timer;