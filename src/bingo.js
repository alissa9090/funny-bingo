import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import BingoCard from './bingoCard';
import bingoCards from '../assets/data/bingoCards.json';

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

// eslint-disable-next-line react/prop-types
const Bingo = ({ className }) => {
  const winCombinations = getWinCombinations();

  const [pickedCombinations, setPickedCombinations] = useState([]);
  const checkIfWinn = (pickedArray) => {
    winCombinations.some((winCombination) => {
      if (
        winCombination.winIds.every((id) => pickedArray.includes(id))
        && !pickedCombinations.includes(winCombination.id)
      ) {
        setPickedCombinations([...pickedCombinations, winCombination.id]);
        console.log('WIN!!!');
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

  return (
    <Grid container spacing={2} justify="space-around" className={className}>
      {[...Array(5).keys()].map(((row) => (

        <Grid key={row} container item xs={12} spacing={2} justify="space-around">
          {bingoCards.slice(row * 5, row * 5 + 5).map(({ id, text }) => (

            <Grid key={id} item xs={2}>
              <BingoCard text={text} picked={picked.includes(id)} onClick={pick(id)} />
            </Grid>

          ))}
        </Grid>

      )))}
    </Grid>
  );
};

export default Bingo;
