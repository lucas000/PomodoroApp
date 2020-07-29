import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e71414;
`;

export const ContainerTime = styled.View`
  margin-top: 160px;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 60px;
  color: #e8e4e1;
`;

export const PlayButton = styled.TouchableOpacity``;

export const TimeOfCicle = styled.TouchableOpacity`
  margin-left: 5px;
  margin-right: 5px;
`;

export const TimeOfInteraval = styled.TouchableOpacity`
  margin-left: 5px;
  margin-right: 5px;
`;

export const ContainerControlls = styled.View`
  flex-direction: row;
  margin-top: 60px;
  width: 150px;
  justify-content: space-between;
`;

export const ContainerCicleAndInterval = styled.View`
  flex-direction: row;
  margin-top: 50%;
`;

export const ContainerCicle = styled.View`
  align-items: center;
  margin-right: 10px;
`;

export const ContainerControllCicle = styled.View`
  flex-direction: row;
`;

export const ContainerInterval = styled.View`
  align-items: center;
  margin-left: 10px;
`;

export const TextInterval = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  color: #e8e4e1;
`;

export const ContainerControllMinutes = styled.View`
  flex-direction: row;
`;

export const TextTime = styled.Text`
  font-size: 20px;
  color: #e8e4e1;
`;
