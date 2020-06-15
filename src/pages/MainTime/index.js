import React, {useCallback} from 'react';
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
  const handleStartCicle = useCallback(() => {
    Alert.alert('handleStartCicle', 'handleStartCicle');
  }, []);

  const handleRestartTimer = useCallback(() => {
    Alert.alert('handleRestartTimer', 'handleRestartTimer');
  }, []);

  const handleAddTimeToCicle = useCallback(() => {
    Alert.alert('handleAddTimeToCicle', 'handleAddTimeToCicle');
  }, []);

  const handleRemoveTimeToCicle = useCallback(() => {
    Alert.alert('handleRemoveTimeToCicle', 'handleRemoveTimeToCicle');
  }, []);

  const handleAddTimeToInterval = useCallback(() => {
    Alert.alert('handleAddTimeToInterval', 'handleAddTimeToInterval');
  }, []);

  const handleRemoveTimeToInterval = useCallback(() => {
    Alert.alert('handleRemoveTimeToInterval', 'handleRemoveTimeToInterval');
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
        <TextTime>24 min</TextTime>

        <TimeOfCicle onPress={handleRemoveTimeToCicle}>
          <Icon name="arrow-down" size={30} color="#e8e4e1" />
        </TimeOfCicle>

        <TimeOfInteraval onPress={handleAddTimeToInterval}>
          <Icon name="arrow-up" size={30} color="#e8e4e1" />
        </TimeOfInteraval>
        <TextTime>5 min</TextTime>
        <TimeOfInteraval onPress={handleRemoveTimeToInterval}>
          <Icon name="arrow-down" size={30} color="#e8e4e1" />
        </TimeOfInteraval>
      </ContainerMinutes>
    </Container>
  );
};

export default App;
