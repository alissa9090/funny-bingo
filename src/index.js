import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from './components/bingo';
import '../assets/css/index.less';

ReactDOM.render(
  <Bingo edgeSize={5} />,
  document.getElementById('root')
);
