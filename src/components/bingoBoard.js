/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import BingoCard from './bingoCard';

const BingoBoard = ({
  className, bingoCards, picked, onClick, edgeSize, pickedWinCombinations
}) => (
  <div className={`${className} bingo-board-container`} style={{ gridTemplateColumns: `repeat(${edgeSize}, 1fr)`, gridTemplateRows: `repeat(${edgeSize}, 1fr)` }}>
    {bingoCards.slice(0, edgeSize * edgeSize).map((bingoCard, index) => (
      <BingoCard
        key={index}
        text={bingoCard}
        picked={picked.includes(index)}
        onClick={onClick(index)}
        highlight={pickedWinCombinations.includes(index)}
      />
    ))}
  </div>
);

export default BingoBoard;
