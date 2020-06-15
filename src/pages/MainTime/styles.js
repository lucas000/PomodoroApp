import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e71414;
`;

export const ContainerTime = styled.View`
  margin-top: 150px;
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
  margin-top: 60px;
  width: 150px;
  justify-content: space-between;
`;

export const ContainerCicleAndInterval = styled.View`
  flex-direction: row;
  width: 250px;
  margin-top: 200px;
  justify-content: space-between;
`;

export const TextInterval = styled.Text`
  font-size: 20px;
  color: #e8e4e1;
`;

export const ContainerMinutes = styled.View`
  flex-direction: row;
  margin-top: 20px;
  width: 300px;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextTime = styled.Text`
  font-size: 20px;
  color: #e8e4e1;
`;
