import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './card';

const useStyles = makeStyles(() => ({
  bingo: {
    maxWidth: '600px'
  }
}));

const Bingo = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justify="space-around" className={classes.bingo}>
      {[...Array(5).keys()].map(((row) => (

        <Grid key={row} container item xs={12} spacing={2} justify="space-around">
          {Array.from({ length: 5 }, (_, i) => i + 1 + row * 5).map((item) => (

            <Grid key={item} item xs={2}>
              <Card id={item} />
            </Grid>

          ))}
        </Grid>

      )))}
    </Grid>
  );
};

export default Bingo;
