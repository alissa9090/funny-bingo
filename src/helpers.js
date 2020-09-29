const getСenterIndex = (edgeSize) => (edgeSize * edgeSize - 1) / 2;

const getWinningIndexCombinations = (edgeSize) => {
  const winningIndexCombinations = [];
  const lrDiagonal = [];
  const rlDiagonal = [];
  const centerIndex = getСenterIndex(edgeSize);

  [...Array(edgeSize).keys()].forEach((index) => {
    const rowWinIds = Array.from({ length: edgeSize }, (_, i) => i + index * edgeSize);
    winningIndexCombinations.push(rowWinIds.filter((i) => i !== centerIndex));

    const colWinIds = Array.from({ length: edgeSize }, (_, i) => index + i * edgeSize);
    winningIndexCombinations.push(colWinIds.filter((i) => i !== centerIndex));

    lrDiagonal.push(0 + (edgeSize + 1) * index);
    rlDiagonal.push((edgeSize - 1) + (edgeSize - 1) * index);
  });

  winningIndexCombinations.push(lrDiagonal.filter((i) => i !== centerIndex));
  winningIndexCombinations.push(rlDiagonal.filter((i) => i !== centerIndex));

  return winningIndexCombinations;
};

/**
 * Shuffles array in place.
 */
const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const prepareBingoCardsForNewGame = (bingoCards, edgeSize, centerCard) => {
  const shuffledCards = shuffle(bingoCards).slice(0, edgeSize * edgeSize);
  const middleIndex = getСenterIndex(edgeSize);

  if (Number.isInteger(middleIndex)) {
    shuffledCards.splice(middleIndex, 0, centerCard);
  }

  return shuffledCards;
};

const checkWin = (markedIndex, markedArray, winningIndexCombinations) => winningIndexCombinations
  .filter((winCombination) => winCombination.includes(markedIndex))
  .some((winCombination) => winCombination.every((winIndex) => markedArray.includes(winIndex)));

export {
  getСenterIndex,
  getWinningIndexCombinations,
  shuffle,
  prepareBingoCardsForNewGame,
  checkWin
};
