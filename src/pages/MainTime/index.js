import React, {useCallback, useState, useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {AsyncStorage} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import BackgroundTimer from 'react-native-background-timer';

import {
  Container,
  ContainerTime,
  ContainerCicleAndInterval,
  TextInterval,
  ContainerControllMinutes,
  TextTime,
  Time,
  MoreOptions,
  InfoButton,
  InfoIcon,
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
import {useNavigation} from '@react-navigation/native';

const MainTime = () => {
  const [timeCicle, setTimeCicle] = useState(25);
  const [timeInterval, setTimeInterval] = useState(5);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInSeconds, setTimerInSeconds] = useState(null);
  const [iconStatus, setIconStatus] = useState('play');
  const [isModalVisible, setModalVisible] = useState(false);
  const [stopedCicle, setStopedCicle] = useState(true);
  const [typeTimer, setTypeTimer] = useState('cicle');
  const [quantityCicle, setQuantityCicle] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    async function _getData() {
      try {
        const cicle = await AsyncStorage.getItem('@PomodoTimer:timeCicle');
        const interval = await AsyncStorage.getItem(
          '@PomodoTimer:timeInterval',
        );
        const ciclesQuantity = await AsyncStorage.getItem(
          '@PomodoTimer:ciclesQuantity',
        );

        if (cicle !== null && interval !== null && ciclesQuantity !== null) {
          setTimeCicle(Number(cicle));
          setTimeInterval(Number(interval));
          setQuantityCicle(Number(ciclesQuantity));
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

        await AsyncStorage.setItem(
          '@PomodoTimer:ciclesQuantity',
          JSON.stringify(quantityCicle),
        );
      } catch (error) {}
    }

    _setData();
  }, [timeCicle, timeInterval, quantityCicle]);

  useEffect(() => {
    let id;

    if (timerRunning) {
      id = BackgroundTimer.setInterval(() => {
        if (timerInSeconds !== 0) {
          setTimerInSeconds((state) => state - 1);
          setStopedCicle((state) => !state);
          clearInterval(id);
        }
      }, 1000);
    }

    return () => {
      if (id) {
        BackgroundTimer.clearInterval(id);
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
          Alert.alert(
            'Erro ao tocar o sino',
            'Estamos com problema pare tocar o sino, por favor, nos-dê um feedback :)',
          );
        }

        setModalVisible(!isModalVisible);

        if (typeTimer === 'cicle') {
          setQuantityCicle((state) => state + 1);
        }
        timerRunning ? setIconStatus('play') : setIconStatus('pause');
      }
    }
  }, [timerInSeconds, isModalVisible, stopedCicle, timerRunning, typeTimer]);

  useEffect(() => {
    if (quantityCicle === 3) {
      setTypeTimer('pause');
    }
  }, [quantityCicle]);

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
        'Alteração indisponível',
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
        'Alteração indisponível',
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
    if (timerRunning) {
      Alert.alert(
        'Alteração indisponível',
        'É possível alterar o tempo apenas quando o crônometro está parado.',
      );
    } else {
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
    }
  }, [timerRunning]);

  const handleRemoveTimeToInterval = useCallback(() => {
    if (timerRunning) {
      Alert.alert(
        'Alteração indisponível',
        'É possível alterar o tempo apenas quando o crônometro está parado.',
      );
    } else {
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
    }
  }, [timerRunning]);

  const handleOption = useCallback(
    (option) => {
      setModalVisible((state) => !state);

      if (option[0] === 'no') {
        setTimerInSeconds(timeCicle * 60);
        setTypeTimer('cicle');
      } else {
        if (typeTimer === 'cicle') {
          setTimerRunning((state) => !state);
          setIconStatus('pause');
          setTypeTimer('interval');
          setTimerInSeconds(timeInterval * 60);
        }
        if (typeTimer === 'interval') {
          setTimerRunning((state) => !state);
          setIconStatus('pause');
          setTimerInSeconds(timeCicle * 60);
          setTypeTimer('cicle');
        }
        if (typeTimer === 'pause') {
          setTimerRunning((state) => !state);
          setIconStatus('pause');
          setTimerInSeconds(15 * 60);
          setTypeTimer('interval');
          setQuantityCicle(0);
        }
      }
    },
    [timeCicle, timeInterval, typeTimer],
  );

  function handleGoPageInfo() {
    navigation.navigate('PrivacyPolicy');
  }

  return (
    <Container>
      <ModalTimer
        isVisible={isModalVisible}
        onPress={handleOption}
        type={typeTimer}
      />

      <MoreOptions>
        <InfoButton onPress={handleGoPageInfo}>
          <InfoIcon size={28} name="more-vertical" style={{color: '#fff'}} />
        </InfoButton>
      </MoreOptions>
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

export default MainTime;
