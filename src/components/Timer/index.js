import React, {useEffect, useState} from 'react';

import {Container, TimerText} from './styles';

const Timer = (props) => {
  let {period, running} = props;

  const [timerInSeconds, setTimerInSeconds] = useState(period * 60);

  useEffect(() => {
    let id;

    if (running) {
      id = setInterval(() => {
        if (timerInSeconds !== 0) {
          setTimerInSeconds((state) => state - 1);
        } else {
        }
      }, 1000);
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [running, timerInSeconds]);

  return (
    <Container>
      <TimerText>
        {Math.floor(timerInSeconds / 60)
          .toString()
          .padStart(2, '0') +
          ':' +
          (timerInSeconds % 60).toString().padStart(2, '0')}
      </TimerText>
    </Container>
  );
};

export default Timer;
