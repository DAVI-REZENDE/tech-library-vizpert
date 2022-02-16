import React, { useEffect, useState } from 'react'
import ClockBase from '../../assets/clock_base.svg';

import './styles.css'

function Clock() {

  const [hourRatio, setHourRatio] = useState(0)
  const [minuteRatio, setMinuteRatio] = useState(0)
  const [secondRatio, setSecondRatio] = useState(0)

  useEffect(() => {
    setInterval(() => {
      updateClock()
    }, 1000);
  }, [])

  function updateClock() {
    const currentDate = new Date;
    let currentSecondRatio = currentDate.getSeconds() / 60;
    let currentMinuteRatio = (currentSecondRatio + currentDate.getMinutes()) / 60;
    let currentHourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setHourRatio(currentHourRatio)
    setMinuteRatio(currentMinuteRatio)
    setSecondRatio(currentSecondRatio)
  }




    return (
        
      <div className="clock" style={{backgroundImage: `url('${ClockBase}')`}}>
        <div className="hand hour" style={{transform: `translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
        <div className="hand minute"style={{transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`}}  ></div>
        <div className="hand second"style={{transform: `translate(-50%) rotate(${secondRatio * 360}deg)`}}  ></div>
        
        <div className="number number1"></div>
        <div className="number number2"></div>
        <div className="number number3"></div>
        <div className="number number4"></div>
        <div className="number number5"></div>
        <div className="number number6"></div>
        <div className="number number7"></div>
        <div className="number number8"></div>
        <div className="number number9"></div>
        <div className="number number10"></div>
        <div className="number number11"></div>
        <div className="number number12"></div>
    </div>
    
    )
    
}


export default Clock