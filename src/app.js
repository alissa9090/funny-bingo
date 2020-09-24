import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Bingo from './bingo';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: '600px'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Bingo />
    </div>
  );
}

export default App;
