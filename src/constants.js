import React from 'react';

const bingoCards = [
  '(animal noises in the backgroud)',
  'is ___ on the call?',
  'we do have 5 minutes left',
  'Hello, hello?',
  'could you please get closer to the mic',
  'i was having connection issues',
  'sorry, i had problems loging in',
  'can you email that to everyone?',
  'can you repeate please?',
  'sorry, something ___ with my calendar',
  '(child noises in the background)',
  'Could you share this slides afterwards?',
  'sorry, i didn\'t found the conference id',
  'You will send the minutes?',
  'i need to jump in another call',
  'can everyone go on mute',
  'can we take this offline?',
  'do you see my screen?',
  'is everyone in the call?',
  'can somebody grand presenter rights?',
  'sorry, i was on mute.',
  '(load painful echo / feedback)',
  'Next slide, please.',
  'who just joined?'
];

const centerCard = (
  <span role="img" aria-label="Face with Medical Mask">
    CONF CALL
    <br />
    😷 BINGO
  </span>
);

export {
  bingoCards,
  centerCard
};
