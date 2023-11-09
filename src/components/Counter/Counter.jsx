import { useContext, } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import BossHead from "../../images/boss_head.svg"

function Counter () {
  const { counter } = useContext(GeneralContext)
  
  return (
    <div className="counter">
      <img src={BossHead} alt="boss head" className="counter__image"/>
      <p className="counter__paragraph">{counter < 10 ? `0${counter}/10` :`${counter}/10`}</p>
    </div>
    
  )
}

export default Counter;