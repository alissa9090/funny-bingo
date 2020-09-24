import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from './bingo';
import '../assets/css/index.css';

ReactDOM.render(
  <Bingo />,
  document.getElementById('root')
);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then((reg) => {
//         console.log('Service worker registered.', reg);
//       }, console.log);
//   });
// }
