/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ButtonAppBar = ({ startNewGame }) => (
  <div className="bingo-app-bar">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="bingo-app-bar-title">
          Funny Bingo
        </Typography>
        <Button className="new-game-button" onClick={startNewGame}>New game</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default ButtonAppBar;
