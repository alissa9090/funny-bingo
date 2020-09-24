/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

// eslint-disable-next-line react/prop-types
const BingoCard = ({ text, picked, onClick }) => (
  <div className="bingo-card-container responsive-font-size" onClick={onClick}>
    <div className={`${picked ? 'crossed-out ' : ''}bingo-card-item`}>{text}</div>
  </div>
);

export default BingoCard;
