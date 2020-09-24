import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BingoAppBar from './bingoAppBar';
import BingoBoard from './bingoBoard';
import bingoCards from '../assets/data/bingoCards.json';
import Firework from './firework';

const useStyles = makeStyles(() => ({
  appBarCoontainer: {
    height: '84px'
  },
  bingoContainer: {
    height: 'calc(100vh - 84px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bingo: {
    maxWidth: '600px'
  }
}));

const getWinCombinations = () => {
  const winCombinations = [];
  [...Array(5).keys()].forEach((index) => {
    const rowWinIds = bingoCards.slice(index * 5, index * 5 + 5).map(({ id }) => id);
    winCombinations.push({
      id: `row-${index}`,
      winIds: rowWinIds.filter((id) => id !== 12)
    });

    const colWinIds = Array.from({ length: 5 }, (_, i) => index + i * 5);
    winCombinations.push({
      id: `col-${index}`,
      winIds: colWinIds.filter((id) => id !== 12)
    });
  });

  winCombinations.push({
    id: 'diagonal-lr',
    winIds: [0, 6, 18, 24]
  });

  winCombinations.push({
    id: 'diagonal-rl',
    winIds: [4, 8, 16, 20]
  });

  return winCombinations;
};

const Bingo = () => {
  const classes = useStyles();

  const winCombinations = getWinCombinations();

  const [showFirework, setShowFirework] = useState(false);
  const selebrate = () => {
    setShowFirework(true);
    setTimeout(() => {
      setShowFirework(false);
    }, 1500);
  };

  const [pickedCombinations, setPickedCombinations] = useState([]);
  const checkIfWinn = (pickedArray) => {
    winCombinations.some((winCombination) => {
      if (
        winCombination.winIds.every((id) => pickedArray.includes(id))
        && !pickedCombinations.includes(winCombination.id)
      ) {
        setPickedCombinations([...pickedCombinations, winCombination.id]);
        selebrate();
        return true;
      }
      return false;
    });
  };

  const [picked, setPicked] = useState([]);
  const pick = (id) => () => {
    const newPicked = picked.includes(id) || id === 12 ? picked : [...picked, id];

    setPicked(newPicked);
    checkIfWinn(newPicked);
  };

  const startNewGame = () => {
    setPickedCombinations([]);
    setPicked([]);
  };

  return (
    <div>
      <div className={classes.appBarCoontainer}>
        <BingoAppBar startNewGame={startNewGame} />
      </div>
      <Firework visible={showFirework} />
      <div className={classes.bingoContainer}>
        <BingoBoard className={classes.bingo} bingoCards={bingoCards} picked={picked} pick={pick} />
      </div>
    </div>
  );
};

export default Bingo;
