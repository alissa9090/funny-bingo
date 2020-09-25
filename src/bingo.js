/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import BingoAppBar from './bingoAppBar';
import BingoBoard from './bingoBoard';
import bingoCards from '../assets/data/bingoCards.json';
import Firework from './firework';

const getWinCombinations = () => {
  const winCombinations = [];
  [...Array(5).keys()].forEach((index) => {
    const rowWinIds = bingoCards.slice(index * 5, index * 5 + 5).map(({ id }) => id);
    winCombinations.push(rowWinIds.filter((id) => id !== 12));

    const colWinIds = Array.from({ length: 5 }, (_, i) => index + i * 5);
    winCombinations.push(colWinIds.filter((id) => id !== 12));
  });

  winCombinations.push([0, 6, 18, 24]);

  winCombinations.push([4, 8, 16, 20]);

  return winCombinations;
};

const Bingo = () => {
  const winCombinations = getWinCombinations();

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
  const pick = (id) => () => {
    if (!picked.includes(id)) {
      const newPicked = [...picked, id];
      setPicked(newPicked);
      checkIfWinn(id, newPicked);
    }
  };

  const startNewGame = () => {
    setPicked([]);
    setShowFirework(false);
  };

  return (
    <div className="bingo-board">
      <div className="app-bar-coontainer">
        <BingoAppBar startNewGame={startNewGame} />
      </div>
      <Firework visible={showFirework} />
      <div className="bingo-container">
        <BingoBoard className="bingo" bingoCards={bingoCards} picked={picked} pick={pick} />
      </div>
    </div>
  );
};

export default Bingo;
