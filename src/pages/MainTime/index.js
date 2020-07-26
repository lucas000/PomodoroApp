import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CountDown from 'react-native-countdown-component';
Icon.loadFont();

import {
  Container,
  ContainerTime,
  Time,
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

const App = () => {
  const [minutesInSeconds, setMinutesInSeconds] = useState(1500);
  const [iconStatus, setIconStatus] = useState('play');
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeCicle, setTimeCicle] = useState(25);
  const [timeInterval, setTimeInterval] = useState(5);
  const [timer, setTimer] = useState(25);

  const handleStartCicle = useCallback(() => {
    setTimerRunning(state => !state);
    timerRunning ? setIconStatus('play') : setIconStatus('pause');
  }, [timerRunning, iconStatus]);

  const handleRestartTimer = useCallback(() => {
    setTimerRunning(false);
  }, []);

  const handleAddTimeToCicle = useCallback(() => {
    if (timerRunning) {
      Alert.alert('Operação bloqueada', 'É possível alterar o tempo apenas quando o crônometro está parado.');
    } else {
      setTimeCicle((state) => {
        if (state > 59) {
          setTimeCicle(state);
          Alert.alert(
            'Tempo não permitido',
            'O tempo de um ciclo deve ser menor que 60 minutos.',
          );
        } else {
          setTimeCicle(state + 1);
        }
      });
    }
  }, [timeCicle, timerRunning]);

  const handleRemoveTimeToCicle = useCallback(() => {
    if (timerRunning) {
      Alert.alert('Operação bloqueada', 'É possível alterar o tempo apenas quando o crônometro está parado.');
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
  }, [timeCicle, timerRunning]);

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
        <CountDown
          until={timeCicle * 60}
          running={timerRunning}
          size={48}
          showSeparator={true}
          separatorStyle={{color: '#e8e4e1'}}
          onFinish={() => Alert.alert('Ciclo concluído...', 'Iniciar intervalo curto.')}
          digitStyle={{backgroundColor: '#e71414'}}
          digitTxtStyle={{color: '#e8e4e1'}}
          timeToShow={['M', 'S']}
          timeLabels={{m: null, s: null}}
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
