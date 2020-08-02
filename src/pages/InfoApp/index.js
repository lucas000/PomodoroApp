import React from 'react';

import {TouchableHighlight, Alert} from 'react-native';
import {Container, AboutPomodoro, ByWho, Definition, UseTerms} from './styles';

const App = () => {
  return (
    <Container>
      <AboutPomodoro>Sobre o Pomodoro Timer</AboutPomodoro>
      <ByWho>
        A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido
        por Francesco Cirillo no final dos anos 1980.
      </ByWho>

      <Definition>
        Pomodoro é uma técnica simples que aumenta sua produtividade, sua
        habilidade de gerenciar tempo e de controlar as distrações.
      </Definition>

      <TouchableHighlight
        underlayColor={'#e71414'}
        onPress={() =>
          Alert.alert('Termos de uso', 'Esses são os termos de uso')
        }>
        <UseTerms>Termos de uso.</UseTerms>
      </TouchableHighlight>
    </Container>
  );
};

export default App;
