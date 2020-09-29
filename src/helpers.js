/* eslint-disable max-len */
const getСenterIndex = (edgeSize) => (edgeSize * edgeSize - 1) / 2;

const getWinIndexCombinations = (edgeSize) => {
  const winCombinations = [];
  const lrDiagonal = [];
  const rlDiagonal = [];
  const centerIndex = getСenterIndex(edgeSize);

  [...Array(edgeSize).keys()].forEach((index) => {
    const rowWinIds = Array.from({ length: edgeSize }, (_, i) => i + index * edgeSize);
    winCombinations.push(rowWinIds.filter((id) => id !== centerIndex));

    const colWinIds = Array.from({ length: edgeSize }, (_, i) => index + i * edgeSize);
    winCombinations.push(colWinIds.filter((id) => id !== centerIndex));

    lrDiagonal.push(0 + (edgeSize + 1) * index);
    rlDiagonal.push((edgeSize - 1) + (edgeSize - 1) * index);
  });

  winCombinations.push(lrDiagonal.filter((id) => id !== centerIndex));
  winCombinations.push(rlDiagonal.filter((id) => id !== centerIndex));

  return winCombinations;
};

/**
 * Shuffles array in place.
 */
const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const prepareBingoCardsForNewGame = (bingoCards, edgeSize, centerCard) => {
  const shuffledCards = shuffle(bingoCards);
  const middleIndex = getСenterIndex(edgeSize);

  if (Number.isInteger(middleIndex)) {
    shuffledCards.splice(middleIndex, 0, centerCard);
  }

  return shuffledCards;
};

export {
  getСenterIndex,
  getWinIndexCombinations,
  shuffle,
  prepareBingoCardsForNewGame
};
