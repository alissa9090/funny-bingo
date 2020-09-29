/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect, useMemo } from 'react';
import { bingoCards, centerCard } from '../constants';
import BingoAppBar from './bingoAppBar';
import BingoBoard from './bingoBoard';
import Firework from './firework';
import { getWinningIndexCombinations, getСenterIndex, prepareBingoCardsForNewGame } from '../helpers';

const Bingo = ({ edgeSize }) => {
  const winningIndexCombinations = useMemo(() => getWinningIndexCombinations(edgeSize), [edgeSize]);
  const centerIndex = getСenterIndex(edgeSize);

  const [showFirework, setShowFirework] = useState(false);
  const selebrate = () => {
    setShowFirework(true);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // console.log('use effect start');
    if (showFirework) {
      const fireworkTimer = setTimeout(() => {
        // console.log(`check if showFirework is true - ${showFirework}`);
        if (showFirework) {
          // console.log('set showFirework to false');
          setShowFirework(false);
        }
      }, 1500);
      return () => {
        // console.log('clear timeout');
        clearTimeout(fireworkTimer);
      };
    }
  }, [showFirework]);

  const checkIfWinn = (markedId, markedArray) => {
    const win = winningIndexCombinations
      .filter((winCombination) => winCombination.includes(markedId))
      .some((winCombination) => winCombination.every((winId) => markedArray.includes(winId)));
    if (win) {
      selebrate();
    }
  };

  const [marked, setPicked] = useState([]);
  const togglePick = (id) => () => {
    if (id !== centerIndex) {
      if (!marked.includes(id)) {
        const newPicked = [...marked, id];
        setPicked(newPicked);
        checkIfWinn(id, newPicked);
      } else {
        setPicked(marked.filter((i) => i !== id));
      }
    }
  };

  const [shuffledBingoCards, setShuffledBingoCards] = useState(prepareBingoCardsForNewGame(bingoCards, edgeSize, centerCard));

  const startNewGame = () => {
    setPicked([]);
    setShowFirework(false);
    setShuffledBingoCards(prepareBingoCardsForNewGame(bingoCards, edgeSize, centerCard));
  };

  const markedWinningCombinations = winningIndexCombinations.filter((winCombination) => winCombination.every((winId) => marked.includes(winId))).flat();

  return (
    <div className="bingo-board">
      <div className="app-bar-coontainer">
        <BingoAppBar startNewGame={startNewGame} />
      </div>
      <Firework visible={showFirework} />
      <div className="bingo-container">
        <BingoBoard className="bingo" bingoCards={shuffledBingoCards} marked={marked} onClick={togglePick} edgeSize={edgeSize} markedWinningCombinations={markedWinningCombinations} />
      </div>
    </div>
  );
};

export default Bingo;
