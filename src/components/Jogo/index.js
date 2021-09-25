import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import { useImage } from "../../context/cardProvider";
import {
  Container,
  NameUser,
  ContainerCard,
  Round,
  ButtonPlayAgain,
} from "./styles";

function Jogo() {
  const [name, _setName] = useState("");
  const [open, setOpen] = useState(false);
  const { image, setImage, restartGame } = useImage();

  const handleStart = () => {
    restartGame();
  };
  const getNameUser = () => {
    if (name === "") {
      setOpen(true);
    }
  };

  useEffect(() => {
    getNameUser();
  }, [name]);

  return (
    <Container>
      <NameUser>Jogador: {name}</NameUser>
      <ContainerCard>
        <Cards />
      </ContainerCard>
      <Round>Rodadas: 0</Round>
      <ButtonPlayAgain onClick={handleStart}>Jogar Novamente</ButtonPlayAgain>
      {open ? <h1>Modal</h1> : null}
    </Container>
  );
}

export default Jogo;
