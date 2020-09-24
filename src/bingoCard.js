/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Paper from '@material-ui/core/Paper';

// eslint-disable-next-line react/prop-types
const BingoCard = ({ text, picked, onClick }) => (
  <div className="bingo-card-container responsive-font-size" onClick={onClick}>
    <Paper className={`${picked ? 'crossed-out ' : ''}bingo-card-item`}>{text}</Paper>
  </div>
);

export default BingoCard;
