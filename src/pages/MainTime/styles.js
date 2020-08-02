import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e71414;
`;

export const Header = styled.View`
  margin-left: auto;
  margin-top: -5%;
`;

export const MoreOptions = styled.TouchableOpacity`
  margin-right: 4%;
`;

export const ContainerTime = styled.View`
  margin-top: 40%;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 60px;
  color: #e8e4e1;
`;

export const PlayButton = styled.TouchableOpacity``;

export const TimeOfCicle = styled.TouchableOpacity``;

export const TimeOfInteraval = styled.TouchableOpacity``;

export const ContainerControlls = styled.View`
  flex-direction: row;
  margin-top: 18%;
  width: 150px;
  justify-content: space-between;
`;

export const ContainerCicleAndInterval = styled.View`
  flex-direction: row;
  margin-top: 50%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const ContainerCicle = styled.View`
  align-items: center;
`;

export const ContainerControllCicle = styled.View`
  flex-direction: row;
`;

export const ContainerInterval = styled.View`
  align-items: center;
`;

export const TextInterval = styled.Text`
  font-size: 20px;
  margin-bottom: 8%;
  color: #e8e4e1;
`;

export const ContainerControllMinutes = styled.View`
  flex-direction: row;
`;

export const TextTime = styled.Text`
  font-size: 20px;
  width: 40%;
  margin-left: 3.8%;
  color: #e8e4e1;
`;
