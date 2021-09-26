import React from "react";

import {
  ModalContainer,
  Container,
  ContainerModal,
  BannerRigth,
  Header,
  Title,
  CloseButton,
  Content,
} from "./styles";

function Modal({ title, onClose = () => {}, children }) {
  return (
    <ModalContainer>
      <Container>
        <BannerRigth />
        <ContainerModal>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>x</CloseButton>
          </Header>
          <Content>{children}</Content>
        </ContainerModal>
      </Container>
    </ModalContainer>
  );
}

export default Modal;
