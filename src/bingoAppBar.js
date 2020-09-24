import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  {
    root: {
      flexGrow: 1,
      marginBottom: '20px'
    },
    title: {
      marginLeft: '20px',
      flexGrow: 1
    },
    button: {
      color: 'white'
    }
  }));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Funny Bingo
          </Typography>
          <Button className={classes.button}>New game</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
