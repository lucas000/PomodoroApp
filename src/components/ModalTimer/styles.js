import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const ModalContainer = styled(Modal)`
  flex: 0.6;
  margin-top: 50%;
  background-color: #fff;
  border-radius: 8px;
`;

export const ContainerModal = styled.View`
  align-items: center;
  border-color: #f7f7;
  flex: 0.5;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 8%;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: #e8e4e1;
`;

export const Texto = styled.Text`
  font-size: 20px;
  margin-top: 4%;
  color: #e8e4e1;
`;

export const ButtonNo = styled.TouchableOpacity`
  background-color: #e71414;
  padding: 4px;
  border-radius: 2px;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 20px;
`;

export const ButtonYes = styled(ButtonNo)``;

export const TextButtonOk = styled.Text`
  font-size: 20px;
  padding: 2px;
  color: #e8e4e1;
`;

export const ButtonOk = styled.Text``;
