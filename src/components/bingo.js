/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from 'react';
import BingoAppBar from './bingoAppBar';
import BingoBoard from './bingoBoard';
import Firework from './firework';
import {
  getWinningIndexCombinations,
  getСenterIndex,
  prepareBingoCardsForNewGame,
  checkWin
} from '../helpers';

const Bingo = ({ edgeSize, cards, centerCard }) => {
  const winningIndexCombinations = useMemo(() => getWinningIndexCombinations(edgeSize), [edgeSize]);
  const centerIndex = getСenterIndex(edgeSize);

  const [showFirework, setShowFirework] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (showFirework) {
      const fireworkTimer = setTimeout(() => {
        if (showFirework) {
          setShowFirework(false);
        }
      }, 1500);
      return () => clearTimeout(fireworkTimer);
    }
  }, [showFirework]);

  const [markedIndexes, setMarkedIndexes] = useState([]);
  const toggleMarked = (index) => () => {
    if (index !== centerIndex) {
      if (!markedIndexes.includes(index)) {
        const newMarkedIndexes = [...markedIndexes, index];
        setMarkedIndexes(newMarkedIndexes);
        if (checkWin(index, newMarkedIndexes, winningIndexCombinations)) {
          setShowFirework(true);
        }
      } else {
        setMarkedIndexes(markedIndexes.filter((i) => i !== index));
      }
    }
  };

  const [bingoCards, setBingoCards] = useState(
    prepareBingoCardsForNewGame(cards, edgeSize, centerCard)
  );

  const startNewGame = () => {
    setMarkedIndexes([]);
    setShowFirework(false);
    setBingoCards(
      prepareBingoCardsForNewGame(cards, edgeSize, centerCard)
    );
  };

  const markedWinningIndexCombinations = winningIndexCombinations.filter(
    (winCombination) => winCombination.every((winIndex) => markedIndexes.includes(winIndex))
  ).flat();

  return (
    <div className="bingo-board">
      <div className="app-bar-coontainer">
        <BingoAppBar startNewGame={startNewGame} />
      </div>
      <Firework visible={showFirework} />
      <div className="bingo-container">
        <BingoBoard
          cards={bingoCards}
          markedCardsIndexes={markedIndexes}
          onCardClick={toggleMarked}
          edgeSize={edgeSize}
          markedWinningIndexCombinations={markedWinningIndexCombinations}
        />
      </div>
    </div>
  );
};

export default Bingo;
