
import { GeneralContext } from './GeneralContext'

export default function Contexts ({
  children,
  counter, 
  setCounter,
  getRandomizer,
  countdown,
  setCountdown,
  isOpen,
  setIsOpen,
  figureVisible,
  setFigureVisible,
  popupType,
  setPopupType,
  timerProperties,
  setTimerProperties,
  setFirstUpdate,
})  {
  return (
      <GeneralContext.Provider
        value={{
          counter, 
          setCounter,
          getRandomizer,
          countdown,
          setCountdown,
          isOpen,
          setIsOpen,
          figureVisible,
          setFigureVisible,
          popupType,
          setPopupType,
          timerProperties,
          setTimerProperties,
          setFirstUpdate,
        }}
      >
      {children}
      </GeneralContext.Provider>
  )
}