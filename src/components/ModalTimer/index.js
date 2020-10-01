import React, {useCallback} from 'react';

import {
  ModalContainer,
  ContainerModal,
  TextButtonOk,
  TextTitle,
  ContainerButtons,
  Texto,
  ButtonNo,
  ButtonYes,
} from './styles';
const ModalTimer = (props) => {
  const {isVisible, type} = props;

  const callback = useCallback(
    (option) => {
      props.onPress([option, type]);
    },
    [props, type],
  );

  return (
    <ModalContainer isVisible={isVisible} style={{backgroundColor: '#007944'}}>
      <ContainerModal>
        <TextTitle />
        {type === 'cicle' && <TextTitle>Está na hora do intervalo</TextTitle>}
        {type === 'interval' && <TextTitle>Intervalo finalizado</TextTitle>}
        {type === 'pause' && <TextTitle>Pomodoro finalizado</TextTitle>}

        {type === 'cicle' && <Texto>Deseja iniciar um intervalo?</Texto>}
        {type === 'interval' && <Texto>Deseja iniciar um ciclo?</Texto>}
        {type === 'pause' && <Texto>Deseja iniciar um intervalo longo?</Texto>}

        <ContainerButtons>
          <ButtonNo onPress={() => callback('no')}>
            <TextButtonOk>Não</TextButtonOk>
          </ButtonNo>

          <ButtonYes onPress={() => callback('yes')}>
            <TextButtonOk>Sim</TextButtonOk>
          </ButtonYes>
        </ContainerButtons>
      </ContainerModal>
    </ModalContainer>
  );
};

export default ModalTimer;
