import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from './components/bingo';
import { bingoCards, centerCard } from './constants';
import '../assets/css/index.less';

ReactDOM.render(
  <Bingo edgeSize={5} cards={bingoCards} centerCard={centerCard} />,
  document.getElementById('root')
);
