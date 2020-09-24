import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './bingoAppBar';
import Bingo from './bingo';

const useStyles = makeStyles(() => ({
  appBarCoontainer: {
    height: '84px'
  },
  outer: {
    display: 'table',
    position: 'absolute',
    height: 'calc(100% - 84px)',
    width: '100%'
  },
  middle: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  inner: {
    margin: '0 auto',
    maxWidth: '600px'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarCoontainer}>
        <ButtonAppBar />
      </div>
      <div className={classes.outer}>
        <div className={classes.middle}>
          <div className={classes.inner}>
            <Bingo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
