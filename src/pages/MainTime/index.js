import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

import {
  Container,
  ContainerTime,
  Time,
  ContainerCicleAndInterval,
  TextInterval,
  ContainerMinutes,
  TextTime,
  ContainerControlls,
} from './styles';

const App = () => {
  return (
    <Container>
      <ContainerTime>
        <Time>22:00</Time>
      </ContainerTime>

      <ContainerControlls>
        <Icon name="play" size={48} color="#e8e4e1" />
        <Icon name="refresh-cw" size={48} color="#e8e4e1" />
      </ContainerControlls>

      <ContainerCicleAndInterval>
        <TextInterval>Ciclos</TextInterval>
        <TextInterval>Intervalo</TextInterval>
      </ContainerCicleAndInterval>

      <ContainerMinutes>
        <Icon name="arrow-up" size={30} color="#e8e4e1" />
        <TextTime>24 min</TextTime>
        <Icon name="arrow-down" size={30} color="#e8e4e1" />
        <Icon name="arrow-up" size={30} color="#e8e4e1" />
        <TextTime>5 min</TextTime>
        <Icon name="arrow-down" size={30} color="#e8e4e1" />
      </ContainerMinutes>
    </Container>
  );
};

export default App;
