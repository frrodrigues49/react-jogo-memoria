import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Container = styled.div`
  display: flex;
  background-color: #202737;
  color: #cdcdd3;
  width: 100%;
  height: 60%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
export const BannerRigth = styled.div`
  border-top-left-radius: 20px;
  width: 30px;
  height: 100%;
  background-image: linear-gradient(#c97b51, #fabd73);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h4`
  color: #cdcdd3;
  text-shadow: 10px 5px 5px rgba(24, 29, 41, 0.8);
`;
export const CloseButton = styled.button`
  background-color: #c97b51;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100%;
`;
