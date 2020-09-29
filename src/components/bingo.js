/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect, useMemo } from 'react';
import { bingoCards, centerCard } from '../constants';
import BingoAppBar from './bingoAppBar';
import BingoBoard from './bingoBoard';
import Firework from './firework';
import { getWinIndexCombinations, getСenterIndex, prepareBingoCardsForNewGame } from '../helpers';

const Bingo = ({ edgeSize }) => {
  const winCombinations = useMemo(() => getWinIndexCombinations(edgeSize), [edgeSize]);
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

  const checkIfWinn = (pickedId, pickedArray) => {
    const win = winCombinations
      .filter((winCombination) => winCombination.includes(pickedId))
      .some((winCombination) => winCombination.every((winId) => pickedArray.includes(winId)));
    if (win) {
      selebrate();
    }
  };

  const [picked, setPicked] = useState([]);
  const togglePick = (id) => () => {
    if (id !== centerIndex) {
      if (!picked.includes(id)) {
        const newPicked = [...picked, id];
        setPicked(newPicked);
        checkIfWinn(id, newPicked);
      } else {
        setPicked(picked.filter((i) => i !== id));
      }
    }
  };

  const [shuffledBingoCards, setShuffledBingoCards] = useState(prepareBingoCardsForNewGame(bingoCards, edgeSize, centerCard));

  const startNewGame = () => {
    setPicked([]);
    setShowFirework(false);
    setShuffledBingoCards(prepareBingoCardsForNewGame(bingoCards, edgeSize, centerCard));
  };

  const pickedWinCombinations = winCombinations.filter((winCombination) => winCombination.every((winId) => picked.includes(winId))).flat();

  return (
    <div className="bingo-board">
      <div className="app-bar-coontainer">
        <BingoAppBar startNewGame={startNewGame} />
      </div>
      <Firework visible={showFirework} />
      <div className="bingo-container">
        <BingoBoard className="bingo" bingoCards={shuffledBingoCards} picked={picked} onClick={togglePick} edgeSize={edgeSize} pickedWinCombinations={pickedWinCombinations} />
      </div>
    </div>
  );
};

export default Bingo;
