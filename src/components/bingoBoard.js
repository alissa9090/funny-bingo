/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import BingoCard from './bingoCard';

const BingoBoard = ({
  className, bingoCards, marked, onClick, edgeSize, markedWinningCombinations
}) => (
  <div className={`${className} bingo-board-container`} style={{ gridTemplateColumns: `repeat(${edgeSize}, 1fr)`, gridTemplateRows: `repeat(${edgeSize}, 1fr)` }}>
    {bingoCards.slice(0, edgeSize * edgeSize).map((bingoCard, index) => (
      <BingoCard
        key={index}
        text={bingoCard}
        marked={marked.includes(index)}
        onClick={onClick(index)}
        highlight={markedWinningCombinations.includes(index)}
      />
    ))}
  </div>
);

export default BingoBoard;
