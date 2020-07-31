import React, {useCallback, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {AsyncStorage} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

import {
  Container,
  ContainerTime,
  ContainerCicleAndInterval,
  TextInterval,
  ContainerControllMinutes,
  TextTime,
  Time,
  TimeOfCicle,
  TimeOfInteraval,
  ContainerControlls,
  ContainerControllCicle,
  ContainerCicle,
  PlayButton,
  ContainerInterval,
} from './styles';

import ModalTimer from '../../components/ModalTimer';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  const [timeCicle, setTimeCicle] = useState(25);
  const [timeInterval, setTimeInterval] = useState(5);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInSeconds, setTimerInSeconds] = useState(null);
  const [iconStatus, setIconStatus] = useState('play');
  const [isModalVisible, setModalVisible] = useState(false);
  const [stopedCicle, setStopedCicle] = useState(true);
  const [typeTimer, setTypeTimer] = useState('');
  const [quantityCicle, setQuantityCicle] = useState(0);

  useEffect(() => {
    async function _getData() {
      try {
        const cicle = await AsyncStorage.getItem('@PomodoTimer:timeCicle');

        const interval = await AsyncStorage.getItem(
          '@PomodoTimer:timeInterval',
        );

        if (cicle !== null && interval !== null) {
          setTimeCicle(Number(cicle));
          setTimeInterval(Number(interval));
        }
      } catch (error) {}
    }

    _getData();
  }, []);

  useEffect(() => {
    async function _setData() {
      try {
        await AsyncStorage.setItem(
          '@PomodoTimer:timeCicle',
          JSON.stringify(timeCicle),
        );
        await AsyncStorage.setItem(
          '@PomodoTimer:timeInterval',
          JSON.stringify(timeInterval),
        );
      } catch (error) {}
    }

    _setData();
  }, [timeCicle, timeInterval]);

  useEffect(() => {
    let id;

    if (timerRunning) {
      id = setInterval(() => {
        if (timerInSeconds !== 0) {
          setTimerInSeconds((state) => state - 1);
          setStopedCicle((state) => !state);
          clearInterval(id);
        }
      }, 1000);
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [timerRunning, timerInSeconds, isModalVisible]);

  useEffect(() => {
    setTimerInSeconds(timeCicle * 60);
  }, [timeCicle]);

  useEffect(() => {
    if (!stopedCicle) {
      if (timerInSeconds === 0) {
        setTimerRunning((state) => !state);

        try {
          SoundPlayer.playSoundFile('sounddefault', 'mp3');
        } catch (e) {
          console.log('cannot play the sound file', e);
        }
        setModalVisible(!isModalVisible);
        setQuantityCicle((state) => state + 1);
        timerRunning ? setIconStatus('play') : setIconStatus('pause');
      }
    }
  }, [timerInSeconds, isModalVisible, stopedCicle, timerRunning]);

  const handleRestartTimer = useCallback(() => {
    setTimerRunning(false);
    setTimerInSeconds(timeCicle * 60);
    setIconStatus('play');
  }, [timeCicle]);

  const handleStartCicle = useCallback(() => {
    setTimerRunning((state) => !state);
    setTypeTimer('cicle');
    timerRunning ? setIconStatus('play') : setIconStatus('pause');
  }, [timerRunning]);

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

  const handleOption = useCallback(
    (option) => {
      setModalVisible((state) => !state);

      if (quantityCicle === 3) {
        setTypeTimer('interval');
      }

      if (option[0] === 'no') {
        setTimerInSeconds(timeCicle * 60);
        setTypeTimer('cicle');
      } else {
        if (typeTimer === 'interval') {
          setTimerRunning((state) => !state);
          setIconStatus('pause');
          setTimerInSeconds(15 * 60);
          setTypeTimer('cicle');
          setQuantityCicle(0);
        } else {
          setTimerRunning((state) => !state);
          setIconStatus('pause');
          setTimerInSeconds(timeInterval * 60);
        }
      }
    },
    [timeCicle, timeInterval, quantityCicle, typeTimer],
  );

  return (
    <Container>
      <ModalTimer
        isVisible={isModalVisible}
        onPress={handleOption}
        type={typeTimer}
      />
      <ContainerTime>
        <Time>
          {Math.floor(timerInSeconds / 60)
            .toString()
            .padStart(2, '0') +
            ':' +
            (timerInSeconds % 60).toString().padStart(2, '0')}
        </Time>
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
