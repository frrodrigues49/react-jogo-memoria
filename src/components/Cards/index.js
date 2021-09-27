import React, { useState } from "react";
import { useImage } from "../../context/cardProvider";
import Javascript from "../../assets/js-badge.svg";
import api from "../../services/api";

import { Container, ImageCard, ImageCardFace } from "./styles";

function Cards({ setSuccess, userName }) {
  const [firstCard, setFirstCard] = useState(false);
  const [_, setSecondCard] = useState(false);
  const [lockCards, setLockCards] = useState(false);

  const { image, setImage, round, setRound } = useImage();

  const flipCard = (id) => {
    if (lockCards) return false;

    const newImages = image.filter((item) => {
      if (item.id === id) {
        item.active = true;
      }
      return item;
    });

    if (!firstCard) {
      setFirstCard(true);
      return false;
    }

    setSecondCard(true);

    setImage(newImages);

    checkForMatch();
  };

  const checkForMatch = () => {
    setRound(round + 1);
    const activeKinds = image
      .filter((item) => item.active === true && item.selected === false)
      .map((item) => item.kind);

    let first = activeKinds.slice(0, 1).toString();
    let second = activeKinds.slice(1, 2).toString();

    let isMatch = first === second;
    !isMatch ? unFlipCards() : resetCards(isMatch);
  };

  const unFlipCards = () => {
    setLockCards(true);
    setTimeout(() => {
      const unFlip = image.filter((item) => {
        if (item.active === true && item.selected === false) {
          item.active = false;
        }
        return item;
      });
      setImage(unFlip);
      resetCards();
    }, 1000);
  };

  const resetCards = (isMatch = false) => {
    if (isMatch) {
      const flipCard = image.filter((item) => {
        if (item.active === true && item.selected === false) {
          item.selected = true;
        }
        return item;
      });

      setImage(flipCard);

      isSuccess();
    }
    setFirstCard(false);
    setSecondCard(false);
    setLockCards(false);
  };

  const isSuccess = () => {
    const totalCount = image.map((item) => item.id).length;
    const totalSelected = image.filter((item) => item.selected === true).length;

    if (totalCount === totalSelected) {
      setSuccess(true);
      // grava o total da rodada e o nome do usuario
      saveRanking();
    }
  };
  const saveRanking = async () => {
    const users = await api.get("users");
    const isExist = users.data.filter(
      (item) => item.name.toLocaleUpperCase() === userName.toLocaleUpperCase()
    );

    try {
      if (isExist.length === 0) {
        await api.post("users", {
          name: userName.toLocaleUpperCase(),
          ranking: round + 1,
        });
      } else {
        const id = isExist.map((item) => item.id);
        const userRound = isExist.map((item) => item.ranking);

        if (Number(round) < Number(userRound)) {
          await api.patch(`users/${Number(id)}`, {
            ranking: round,
          });
        }
      }
    } catch (error) {
      console.error("Ops -", error);
    }
  };

  return (
    <>
      {image.map((img) => (
        <Container
          key={img.id}
          flip={img.active}
          onClick={() => flipCard(img.id)}
        >
          <ImageCardFace flip={img.active} src={img.name} alt="Carta" />
          <ImageCard src={Javascript} alt="Question" />
        </Container>
      ))}
    </>
  );
}

export default Cards;
