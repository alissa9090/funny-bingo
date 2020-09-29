import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../assets/images/bingo-icon-512x512.jpg';

const ButtonAppBar = ({ startNewGame }) => (
  <div className="bingo-app-bar">
    <img src={icon} alt="bingo" className="bingo-icon" />
    <h2 className="bingo-app-bar-title">
      Funny Bingo
    </h2>
    <button type="button" onClick={startNewGame} className="new-game-button">
      <h3>New game</h3>
    </button>
  </div>
);

ButtonAppBar.propTypes = {
  startNewGame: PropTypes.func
};

ButtonAppBar.defaultProps = {
  startNewGame: () => { }
};

export default ButtonAppBar;
