/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import BingoCard from './bingoCard';

const Bingo = ({
  className, bingoCards, picked, pick
}) => (
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

export default Bingo;
