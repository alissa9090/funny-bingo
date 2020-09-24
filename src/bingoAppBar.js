/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import icon from '../assets/images/bingo-icon-512x512.jpg';

const ButtonAppBar = ({ startNewGame }) => (
  <div className="bingo-app-bar">
    <img src={icon} alt="bingo" className="bingo-icon" />
    <h2 className="bingo-app-bar-title">
      Funny Bingo
    </h2>
    <h3 className="new-game-button" onClick={startNewGame}>New game</h3>
  </div>
);

export default ButtonAppBar;
