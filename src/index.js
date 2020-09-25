import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from './bingo';
import '../assets/css/index.less';

ReactDOM.render(
  <Bingo blockSize={3} />,
  document.getElementById('root')
);
