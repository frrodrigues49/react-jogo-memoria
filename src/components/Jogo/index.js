import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Cards from "../Cards";
import Modal from "../Modal";
import ModalRanking from "../ModalRanking";
import { useImage } from "../../context/cardProvider";
import Ranking from "../../assets/ranking.svg";
import {
  Container,
  ContainerNameUser,
  ButtonRanking,
  ImageRanking,
  ContainerCard,
  Round,
  ButtonPlayAgain,
  ButtonSave,
  Input,
  ContainerRanking,
  ColRanking,
} from "./styles";

function Jogo() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ranking, setRanking] = useState(false);
  const [rankingUsers, setRankingUsers] = useState([]);
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
  const handleRanking = () => {
    setRanking(true);
    loadRankings();
  };

  const loadRankings = async () => {
    try {
      const response = await api.get("users");
      setRankingUsers(response.data);
    } catch (error) {
      console.error("Ops -", error);
    }
  };

  const handleChange = (e) => {
    if (name.length <= 5) {
      setName(e.target.value);
    } else {
      setName("");
    }
  };

  useEffect(() => {
    getNameUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    loadRankings();
  }, []);

  return (
    <Container>
      <ContainerNameUser>
        Jogador:
        <ButtonRanking onClick={handleRanking}>
          <ImageRanking src={Ranking} alt="Ranking" />
        </ButtonRanking>
        <b>{name.toLocaleUpperCase()}</b>
      </ContainerNameUser>
      <ContainerCard>
        <Cards setSuccess={setSuccess} userName={name} />
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
            // onKeyPress={(e) => handlePress(e)}
            value={name}
            onChange={(e) => handleChange(e)}
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
      {ranking ? (
        <ModalRanking title="Ranking" onClose={() => setRanking(false)}>
          {rankingUsers &&
            rankingUsers
              .sort((a, b) => a.ranking - b.ranking)
              .slice(0, 10)
              .map((item, i) => (
                <ContainerRanking key={i}>
                  <ColRanking>{item.name}</ColRanking>
                  <ColRanking>{item.ranking}</ColRanking>
                </ContainerRanking>
              ))}
        </ModalRanking>
      ) : null}
    </Container>
  );
}

export default Jogo;
