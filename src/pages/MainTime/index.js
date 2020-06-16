import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

import {
  Container,
  ContainerTime,
  Time,
  PlayButton,
  ContainerCicleAndInterval,
  TextInterval,
  ContainerMinutes,
  TextTime,
  TimeOfCicle,
  TimeOfInteraval,
  ContainerControlls,
} from './styles';

const App = () => {
  const [timeCicle, setTimeCicle] = useState(57);
  const [timeInterval, setTimeInterval] = useState(5);

  const handleStartCicle = useCallback(() => {
    Alert.alert('handleStartCicle', 'handleStartCicle');
  }, []);

  const handleRestartTimer = useCallback(() => {
    Alert.alert('handleRestartTimer', 'handleRestartTimer');
  }, []);

  const handleAddTimeToCicle = useCallback(() => {
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
  }, []);

  const handleRemoveTimeToCicle = useCallback(() => {
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
  }, []);

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
        <Time>22:00</Time>
      </ContainerTime>

      <ContainerControlls>
        <PlayButton onPress={handleStartCicle}>
          <Icon name="play" size={48} color="#e8e4e1" />
        </PlayButton>

        <PlayButton onPress={handleRestartTimer}>
          <Icon name="refresh-cw" size={48} color="#e8e4e1" />
        </PlayButton>
      </ContainerControlls>

      <ContainerCicleAndInterval>
        <TextInterval>Ciclos</TextInterval>
        <TextInterval>Intervalo</TextInterval>
      </ContainerCicleAndInterval>

      <ContainerMinutes>
        <TimeOfCicle onPress={handleAddTimeToCicle}>
          <Icon name="arrow-up" size={30} color="#e8e4e1" />
        </TimeOfCicle>
        <TextTime>{timeCicle} min</TextTime>

        <TimeOfCicle onPress={handleRemoveTimeToCicle}>
          <Icon name="arrow-down" size={30} color="#e8e4e1" />
        </TimeOfCicle>

        <TimeOfInteraval onPress={handleAddTimeToInterval}>
          <Icon name="arrow-up" size={30} color="#e8e4e1" />
        </TimeOfInteraval>
        <TextTime>{timeInterval} min</TextTime>
        <TimeOfInteraval onPress={handleRemoveTimeToInterval}>
          <Icon name="arrow-down" size={30} color="#e8e4e1" />
        </TimeOfInteraval>
      </ContainerMinutes>
    </Container>
  );
};

export default App;
