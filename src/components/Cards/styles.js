import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  padding: 15px;
  cursor: pointer;

  transform-style: preserve-3d;
  transition: 0.3s;
  position: relative;

  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "")};

  :active {
    transform: scale(0.97);
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  padding: 15px;
  position: absolute;
  background: #202737;
  border: dashed 3px #2e3545;
  border-radius: 20px;
`;
export const ImageCardFace = styled(ImageCard)`
  transform: rotateY(180deg);
  border: ${(props) => (props.flip ? "solid 1px orange" : "")};
`;
