import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BingoAppBar from './bingoAppBar';
import Bingo from './bingo';

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
  middle: {
    width: '100%'
  },
  inner: {
    margin: 'auto'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarCoontainer}>
        <BingoAppBar />
      </div>
      <div className={classes.bingoContainer}>
        <div className={classes.bingoContainer}>
          <div className={classes.bingoContainer}>
            <Bingo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
