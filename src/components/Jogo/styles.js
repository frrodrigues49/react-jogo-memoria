import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
`;
export const ContainerNameUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d7dded;
  text-align: center;
  font-size: 18px;

  b {
    font-size: 22px;
  }
`;
export const ButtonRanking = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
export const ImageRanking = styled.img`
  width: 50px;
  height: 50px;
`;
export const Round = styled.div`
  color: #48536c;
  font-weight: bold;
  text-align: center;
  text-shadow: 10px 5px 5px rgba(24, 29, 41, 0.8);
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 20px 0;
`;
export const ButtonPlayAgain = styled.button`
  background-color: #5bc274;
  color: #48536c;
  width: 10%;
  font-weight: bold;
  border: none;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(24, 29, 41, 0.8);
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ButtonSave = styled.button`
  background-color: #5bc274;
  margin-top: 20px;
  color: #48536c;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 100%;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #48536c;
  padding: 5px;
`;
export const ContainerRanking = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #48536c;
`;
export const ColRanking = styled.div`
  margin-top: 10px;
`;
