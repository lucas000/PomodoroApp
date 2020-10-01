import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Container,
  ContainerHeader,
  HeaderText,
  TextPrivacyPolicy,
  ButtonConfirme,
  ContainerUseTerms,
  TextAcceptTerms,
  TextButtonConfirme,
  ContainerAgreeTerms,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {Alert, AsyncStorage} from 'react-native';

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function _getData() {
      try {
        const firstLaunch = await AsyncStorage.getItem(
          '@PomodoTimer:wasLaunch',
        );

        if (firstLaunch !== null) {
          navigation.navigate('MainTime');
        }
      } catch (error) {}
    }

    _getData();
  }, [navigation]);

  function handleGoMainPage() {
    navigation.navigate('MainTime');
  }

  return (
    <Container>
      <ContainerHeader>
        <HeaderText>Política de privacidade</HeaderText>
      </ContainerHeader>

      <TextPrivacyPolicy>
        A aplicativo Pomodoro Timer não faz uso de nenhum dado do usuário, este
        aplicativo foi desenvolvido apenas para fim didáticos.
      </TextPrivacyPolicy>

      <ButtonConfirme onPress={handleGoMainPage}>
        <TextButtonConfirme>Confirmar</TextButtonConfirme>
      </ButtonConfirme>
    </Container>
  );
};

export default PrivacyPolicy;
