import React, { useState } from "react";
import './style.css';
import Sectiontitle from "../section-title";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  if (!timeLeft) {
    return <div>¡El tiempo ha terminado!</div>;
  }

  return (
    <div>
      <Sectiontitle mensaje={"Esperando el gran día"} />
      <div>
        {timeLeft.days} días {timeLeft.hours} horas {timeLeft.minutes} minutos{" "}
        {timeLeft.seconds} segundos
      </div>
    </div>
  );
};


const targetDate = "2025-05-24T15:00:00";

  const Saveday = () => {

               return(
              <div className="saveday.s2">
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="countdownwrap">
                              <CountdownTimer targetDate={targetDate} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          );
      
  }
   
  export default Saveday;