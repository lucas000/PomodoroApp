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
  const {isVisible} = props;

  const callback = useCallback(
    (option) => {
      props.onPress(option);
    },
    [props],
  );

  return (
    <ModalContainer isVisible={isVisible} style={{backgroundColor: '#007944'}}>
      <ContainerModal>
        <TextTitle>Está na hora do intervalo</TextTitle>
        <Texto>Deseja iniciar um intervalo?</Texto>

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
