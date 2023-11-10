import { useState, useContext, } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import BadBoss from "../../images/badboss.png"
import GoodBoss from "../../images/goodboss.png"

function Figure ({timer}) {
  const { counter, setCounter, getRandomizer, figureVisible } = useContext(GeneralContext)
  const [topLeft, setTopLeft] = useState([getRandomizer()*100, getRandomizer()*100])
  const [badOrGood, setBadOrGood] = useState(getRandomizer()  >= 0.5 ? 'bad-boss' : 'good-boss')
  const [disappeared, setDisappeared] = useState('')
  const [bubble, setBubble] = useState('')
  const [bossOpacity, setBossOpacity] = useState('')

  const imageBoss = badOrGood === 'bad-boss' ? BadBoss : GoodBoss
  const bossDisappeared = badOrGood === 'bad-boss' ? 'figure__badboss_disappear': 'figure__goodboss_disappear'
  const bossBubble = badOrGood === 'bad-boss' ? 'figure__badboss_bubble': 'figure__goodboss_bubble'

  function addCounter() {
    badOrGood === 'bad-boss' ? setCounter(counter + 1) : setCounter(counter)
  }

  function handleClick () {
    addCounter()
    setDisappeared(bossDisappeared)
    setBubble(bossBubble)
    setBossOpacity('figure__boss_opacity')
    setTimeout(()=> {
      setDisappeared('')
      setBubble('')
      setBossOpacity('')
      setBadOrGood(getRandomizer()  >= 0.5 ? 'bad-boss' : 'good-boss')
      setTopLeft([getRandomizer()*100, getRandomizer()*100])
    }, timer)
  }

  return (
    <div 
      className={`figure ${disappeared} ${bubble} ${figureVisible}`}
      style={{top: `${topLeft[0]}%`, left: `${topLeft[1]}%`}}
    >
      <img src={imageBoss} className={`figure__boss ${bossOpacity}`} onClick={handleClick} alt="boss"/>
    </div>
  )
}

export default Figure;