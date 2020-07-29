import React, {useCallback, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ContainerTime,
  PlayButton,
  ContainerCicleAndInterval,
  TextInterval,
  ContainerControllMinutes,
  TextTime,
  TimeOfCicle,
  TimeOfInteraval,
  ContainerControlls,
  ContainerControllCicle,
  ContainerCicle,
  ContainerInterval,
} from './styles';
import Timer from '../../components/Timer';

const App = () => {
  const [iconStatus, setIconStatus] = useState('play');
  const [timerInSeconds, setTimerInSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeCicle, setTimeCicle] = useState(1);
  const [timeInterval, setTimeInterval] = useState(1);

  useEffect(() => {
    let id;

    if (timerRunning) {
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
  }, [timeInterval, timerRunning, timerInSeconds]);

  const handleStartCicle = useCallback(() => {
    setTimerRunning((state) => !state);
    timerRunning ? setIconStatus('play') : setIconStatus('pause');
  }, [timerRunning]);

  const handleRestartTimer = useCallback(() => {
    setTimerRunning(false);
  }, []);

  const handleAddTimeToCicle = useCallback(() => {
    if (timerRunning) {
      Alert.alert(
        'Operação bloqueada',
        'É possível alterar o tempo apenas quando o crônometro está parado.',
      );
    } else {
      setTimeCicle((state) => {
        if (state > 59) {
          setTimeCicle(state);
          Alert.alert(
            'Tempo não permitido',
            'O tempo de um ciclo deve ser menor ou igual a 60 minutos.',
          );
        } else {
          setTimeCicle(state + 1);
        }
      });
    }
  }, [timerRunning]);

  const handleRemoveTimeToCicle = useCallback(() => {
    if (timerRunning) {
      Alert.alert(
        'Operação bloqueada',
        'É possível alterar o tempo apenas quando o crônometro está parado.',
      );
    } else {
      setTimeCicle((state) => {
        if (state <= 1) {
          setTimeCicle(state);
          Alert.alert(
            'Tempo não permitido',
            'O tempo de um ciclo deve ser maior ou igual a 1 minuto.',
          );
        } else {
          setTimeCicle(state - 1);
        }
      });
    }
  }, [timerRunning]);

  const handleAddTimeToInterval = useCallback(() => {
    setTimeInterval((state) => {
      if (state > 59) {
        setTimeInterval(state);
        Alert.alert(
          'Tempo não permitido',
          'O tempo de um intervalo deve ser menor que 60 minutos.',
        );
      } else {
        setTimeInterval(state + 1);
      }
    });
  }, []);

  const handleRemoveTimeToInterval = useCallback(() => {
    setTimeInterval((state) => {
      if (state <= 1) {
        setTimeInterval(state);
        Alert.alert(
          'Tempo não permitido',
          'O tempo de um intervalo deve ser maior ou igual a 1 minuto.',
        );
      } else {
        setTimeInterval(state - 1);
      }
    });
  }, []);

  return (
    <Container>
      <ContainerTime>
        <Timer
          timeInterval={timeInterval}
          running={timerRunning}
          period={timeCicle}
        />
      </ContainerTime>

      <ContainerControlls>
        <PlayButton onPress={handleStartCicle}>
          <Icon name={iconStatus} size={48} color="#e8e4e1" />
        </PlayButton>

        <PlayButton onPress={handleRestartTimer}>
          <Icon name="refresh-cw" size={48} color="#e8e4e1" />
        </PlayButton>
      </ContainerControlls>

      <ContainerCicleAndInterval>
        <ContainerCicle>
          <TextInterval>Ciclos</TextInterval>
          <ContainerControllCicle>
            <TimeOfCicle onPress={handleAddTimeToCicle}>
              <Icon name="arrow-up" size={30} color="#e8e4e1" />
            </TimeOfCicle>

            <TextTime>{timeCicle} min</TextTime>

            <TimeOfCicle onPress={handleRemoveTimeToCicle}>
              <Icon name="arrow-down" size={30} color="#e8e4e1" />
            </TimeOfCicle>
          </ContainerControllCicle>
        </ContainerCicle>

        <ContainerInterval>
          <TextInterval>Intervalo</TextInterval>

          <ContainerControllMinutes>
            <TimeOfInteraval onPress={handleAddTimeToInterval}>
              <Icon name="arrow-up" size={30} color="#e8e4e1" />
            </TimeOfInteraval>
            <TextTime>{timeInterval} min</TextTime>
            <TimeOfInteraval onPress={handleRemoveTimeToInterval}>
              <Icon name="arrow-down" size={30} color="#e8e4e1" />
            </TimeOfInteraval>
          </ContainerControllMinutes>
        </ContainerInterval>
      </ContainerCicleAndInterval>
    </Container>
  );
};

export default App;
