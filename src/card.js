import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    paddingTop: '100%',
    position: 'relative'
  },
  item: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
}));

const App = ({id}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.item}>{id}</Paper>
    </div>
  );
};

export default App;
