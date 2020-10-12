import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BingoCard = ({
  content,
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
      <div className={cardItemClasses}>{ content }</div>
    </button>
  );
};

BingoCard.propTypes = {
  content: PropTypes.node,
  marked: PropTypes.bool,
  onClick: PropTypes.func,
  isInMarkedWinningCombination: PropTypes.bool
};

BingoCard.defaultProps = {
  content: '',
  marked: false,
  onClick: () => {},
  isInMarkedWinningCombination: false
};

export default BingoCard;
