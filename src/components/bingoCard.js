import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BingoCard = ({
  text,
  marked,
  onClick,
  isInMarkedWinningCombination
}) => {
  const cardItemClasses = classNames('bingo-card-item', {
    'crossed-out': marked,
    highlighted: isInMarkedWinningCombination
  });

  return (
    <button
      type="button"
      className="bingo-card-container responsive-font-size"
      onClick={onClick}
    >
      <div className={cardItemClasses}>{ text }</div>
    </button>
  );
};

BingoCard.propTypes = {
  text: PropTypes.string,
  marked: PropTypes.bool,
  onClick: PropTypes.func,
  isInMarkedWinningCombination: PropTypes.bool
};

BingoCard.defaultProps = {
  text: '',
  marked: false,
  onClick: () => {},
  isInMarkedWinningCombination: false
};

export default BingoCard;
