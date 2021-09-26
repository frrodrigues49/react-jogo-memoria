import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import Modal from "../Modal";
import { useImage } from "../../context/cardProvider";
import {
  Container,
  ContainerNameUser,
  ContainerCard,
  Round,
  ButtonPlayAgain,
  ButtonSave,
  Input,
} from "./styles";

function Jogo() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const { round, setRound, restartGame } = useImage();

  const handleStart = () => {
    restartGame();
    setRound(0);
  };
  const handleSuccess = () => {
    restartGame();
    setSuccess(false);
    setRound(0);
  };
  const handleClose = () => {
    if (name === "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const getNameUser = () => {
    if (name === "") {
      setOpen(true);
    }
  };

  useEffect(() => {
    getNameUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <Container>
      <ContainerNameUser>
        Jogador: <b>{name.toLocaleUpperCase()}</b>
      </ContainerNameUser>
      <ContainerCard>
        <Cards setSuccess={setSuccess} />
      </ContainerCard>
      <Round>Rodada: {round}</Round>
      <ButtonPlayAgain
        disabled={round === 0 ? true : false}
        onClick={handleStart}
      >
        Jogar Novamente
      </ButtonPlayAgain>
      {open ? (
        <Modal title="Iniciar o jogo?" onClose={handleClose}>
          <Input
            placeholder="Informe o nome do Jogador!"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ButtonSave onClick={handleClose}>Salvar</ButtonSave>
        </Modal>
      ) : null}
      {success ? (
        <Modal title="Parabens" onClose={handleSuccess}>
          <h1>Você venceu!</h1>
          <span>Rodadas: {round}</span>
          <ButtonPlayAgain onClick={handleSuccess}>
            Jogar Novamente
          </ButtonPlayAgain>
        </Modal>
      ) : null}
    </Container>
  );
}

export default Jogo;
