/* eslint-disable react/prop-types */
import React from 'react';
import BingoCard from './bingoCard';

const BingoBoard = ({
  className, bingoCards, picked, pick
}) => (
  <div className={`${className} bingo-board-container`}>
    {bingoCards.map((bingoCard) => (
      <BingoCard
        key={bingoCard.id}
        text={bingoCard.text}
        picked={picked.includes(bingoCard.id)}
        onClick={pick(bingoCard.id)}
      />
    ))}
  </div>
);

export default BingoBoard;
