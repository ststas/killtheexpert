import { useContext, useState, useEffect } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import ExpertImage from "../../images/expert.png";
import fingerDown from "../../images/finger_down.svg";
import fingerMid from "../../images/finger_mid.svg";
import fingerUp from "../../images/finger_up.svg";
import { textUp, textMid, textDown } from "../../utils/constants"

function InfoTooltip () {
  const { 
    isOpen,
    setIsOpen,
    popupType,
    setPopupType,
    setCountdown,
    counter,
    setCounter,
    setFigureVisible,
    setTimerProperties,
    setFirstUpdate,
  } = useContext(GeneralContext);
  const [fingerImage, setFingerImage] = useState()
  const [text, setText] = useState('')


  useEffect (()=> {
    function setPopupProperties(counter) {
      if(counter <=2) {
        setFingerImage(fingerDown)
        setText(textDown)
      } 
      if (counter >= 3 && counter <=6 ) {
        setFingerImage(fingerMid)
        setText(textMid)
      } 
      if (counter > 6) {
        setFingerImage(fingerUp)
        setText(textUp)
      }
    }
    setPopupProperties(counter)

  },[counter])

  function handleButtonClick() {
    setTimerProperties('timer__background', 'timer__text')
    setFigureVisible('figure_visible')    
    setCountdown(20)
    setCounter(0)
    setIsOpen(false)
    setFirstUpdate(true)
    setTimeout(()=> setPopupType('popup-finish'), 500)
  }

  return (
      <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <div className={`popup__container`}>
        {popupType === 'popup-start'
          ?
          <div className="popup__content">
            <img src={ExpertImage} alt="" className="popup__image-start"/>
            <h2 className="popup__title">{`Отправь «Экспертов»\nв космос!`}</h2>
            <p className="popup__text">{`Душные кликуши появляются и тут и там. Защитись от их «экспертных» оценок — прицелься и отправляй их в космос!`}</p>
          </div>
          : 
          <div className="popup__content">
            <img src={fingerImage} alt="" className="popup__image-finish"/>
            <h2 className="popup__title">{`Запущено ${counter}/10 «экспертов»!`}</h2>
            <p className="popup__text">{text}</p>
          </div>
        }
          <button className='popup__button' type='button' onClick={handleButtonClick}>
            {popupType === 'popup-start' ? "Начать" : "Еще раз!" }
          </button>
        </div>
      </section>
  )
}

export default InfoTooltip;