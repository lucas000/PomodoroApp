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
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function _getData() {
      try {
        const firstLaunch = await AsyncStorage.getItem(
          '@PomodoTimer:wasLaunch',
        );

        console.log('First launch now: ' + firstLaunch);

        if (firstLaunch !== null) {
          navigation.navigate('MainTime');
        }
      } catch (error) {}
    }

    _getData();
  }, [navigation]);

  function handleGoMainPage() {
    if (toggleCheckBox) {
      async function _setData() {
        try {
          await AsyncStorage.setItem(
            '@PomodoTimer:wasLaunch',
            JSON.stringify('yes'),
          );
        } catch (error) {}
      }

      _setData();

      navigation.navigate('MainTime');
    } else {
      Alert.alert(
        'Atenção',
        'Para usar o aplicativo você deve aceitar os termos e política de uso do aplicativo',
      );
    }
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

      <ContainerAgreeTerms>
        <ContainerUseTerms>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <TextAcceptTerms>
            Li e concordo com os termos e políticas de uso do aplicativo.
          </TextAcceptTerms>
        </ContainerUseTerms>

        <ButtonConfirme onPress={handleGoMainPage}>
          <TextButtonConfirme>Confirmar</TextButtonConfirme>
        </ButtonConfirme>
      </ContainerAgreeTerms>
    </Container>
  );
};

export default PrivacyPolicy;
