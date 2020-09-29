import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BingoCard = ({
  text,
  marked,
  onClick,
  isInMarkedWinningCombination
}) => {
  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      onClick(event);
    }
  };

  const cardItemClasses = classNames('bingo-card-item', {
    'crossed-out': marked,
    highlighted: isInMarkedWinningCombination
  });

  return (
    <div
      className="bingo-card-container responsive-font-size"
      onClick={onClick}
      role="checkbox"
      aria-checked={marked}
      tabIndex="0"
      onKeyPress={onKeyPressHandler}
    >
      <div className={cardItemClasses}>{ text }</div>
    </div>
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
