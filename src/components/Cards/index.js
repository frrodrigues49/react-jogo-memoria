import React, { useState } from "react";
import { useImage } from "../../context/cardProvider";
import Javascript from "../../assets/js-badge.svg";

import { Container, ImageCard, ImageCardFace } from "./styles";

function Cards({ setSuccess }) {
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
