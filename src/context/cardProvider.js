import React, { createContext, useContext, useState } from "react";
import images from "./mock/images";

// TODO: recebendo o create context
export const CardContext = createContext();

export const shuffleArray = (arr) => {
  // Loop em todos os elementos
  for (let i = arr.length - 1; i > 0; i--) {
    // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Retornando array com aleatoriedade
  return arr;
};

// TODO: criando o provider
export default function CardProvider({ children }) {
  const [image, setImage] = useState(shuffleArray(images));
  const [round, setRound] = useState(0);

  const restartGame = () => {
    const newGameNodes = shuffleArray(
      images.map((item) => {
        item.active = false;
        item.selected = false;
        return item;
      })
    );

    setImage(newGameNodes);
  };

  return (
    <CardContext.Provider
      value={{ image, setImage, round, setRound, restartGame }}
    >
      {children}
    </CardContext.Provider>
  );
}

// TODO: criando o hook para para retornar os estados
export function useImage() {
  const context = useContext(CardContext);
  if (!context) throw new Error("useImage must be used within a ImageProvider");
  const { image, setImage, round, setRound, restartGame } = context;

  return { image, setImage, round, setRound, restartGame };
}
