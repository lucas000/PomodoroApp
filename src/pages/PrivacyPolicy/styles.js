import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  margin-top: 28px;
`;

export const ContainerHeader = styled.View`
  background: #000000;
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const TextPrivacyPolicy = styled.Text`
  font-size: 16px;
  color: #000000;
  margin-top: 12px;
  margin-left: 12px;
`;

export const ContainerUseTerms = styled.View`
  flex-direction: row;
  margin-top: 18px;
  margin-left: 12px;
`;

export const ContainerAgreeTerms = styled.View`
  margin-top: 130%;
  width: 100%;
`;

export const TextAcceptTerms = styled.Text`
  font-size: 16px;
  margin-right: 50px;
`;

export const ButtonConfirme = styled.TouchableOpacity`
  background-color: #000000;
  padding: 12px;
  border-radius: 3px;
  font-size: 20px;
  margin: 10px;
  align-items: center;
`;

export const TextButtonConfirme = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
