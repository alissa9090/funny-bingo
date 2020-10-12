import React from 'react';
import PropTypes from 'prop-types';
import BingoCard from './bingoCard';

const BingoBoard = ({
  cards,
  markedCardsIndexes,
  onCardClick,
  edgeSize,
  markedWinningIndexCombinations
}) => (
  <div className="bingo bingo-board-container" style={{ gridTemplateColumns: `repeat(${edgeSize}, 1fr)`, gridTemplateRows: `repeat(${edgeSize}, 1fr)` }}>
    {cards.map((bingoCard, index) => (
      <BingoCard
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        content={bingoCard}
        marked={markedCardsIndexes.includes(index)}
        onClick={onCardClick(index)}
        isInMarkedWinningCombination={markedWinningIndexCombinations.includes(index)}
      />
    ))}
  </div>
);

BingoBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.node),
  markedCardsIndexes: PropTypes.arrayOf(PropTypes.number),
  onCardClick: PropTypes.func,
  edgeSize: PropTypes.number,
  markedWinningIndexCombinations: PropTypes.arrayOf(PropTypes.number)
};

BingoBoard.defaultProps = {
  cards: [],
  markedCardsIndexes: [],
  onCardClick: () => {},
  edgeSize: 0,
  markedWinningIndexCombinations: []
};

export default BingoBoard;
