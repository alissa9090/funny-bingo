/* eslint-disable react/prop-types */
import React from 'react';
import BingoCard from './bingoCard';

const BingoBoard = ({
  className, bingoCards, picked, onClick, blockSize
}) => (
  <div className={`${className} bingo-board-container`} style={{ gridTemplateColumns: `repeat(${blockSize}, 1fr)`, gridTemplateRows: `repeat(${blockSize}, 1fr)` }}>
    {bingoCards.slice(0, blockSize * blockSize).map((bingoCard) => (
      <BingoCard
        key={bingoCard.id}
        text={bingoCard.text}
        picked={picked.includes(bingoCard.id)}
        onClick={onClick(bingoCard.id)}
      />
    ))}
  </div>
);

export default BingoBoard;
