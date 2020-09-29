/* eslint-disable max-len */
const getMiddleIndex = (blockSize) => (blockSize * blockSize - 1) / 2;

const getWinIndexCombinations = (blockSize) => {
  const winCombinations = [];
  const lrDiagonal = [];
  const rlDiagonal = [];
  const middleIndex = getMiddleIndex(blockSize);

  [...Array(blockSize).keys()].forEach((index) => {
    const rowWinIds = Array.from({ length: blockSize }, (_, i) => i + index * blockSize);
    winCombinations.push(rowWinIds.filter((id) => id !== middleIndex));

    const colWinIds = Array.from({ length: blockSize }, (_, i) => index + i * blockSize);
    winCombinations.push(colWinIds.filter((id) => id !== middleIndex));

    lrDiagonal.push(0 + (blockSize + 1) * index);
    rlDiagonal.push((blockSize - 1) + (blockSize - 1) * index);
  });

  winCombinations.push(lrDiagonal.filter((id) => id !== middleIndex));
  winCombinations.push(rlDiagonal.filter((id) => id !== middleIndex));

  return winCombinations;
};

/**
 * Shuffles array in place.
 */
const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i - 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const prepareBingoCardsForNewGame = (bingoCards, blockSize, middleCard) => {
  const shuffledCards = shuffle(bingoCards);
  const middleIndex = getMiddleIndex(blockSize);

  if (Number.isInteger(middleIndex)) {
    return [...shuffledCards.slice(0, middleIndex), middleCard, ...shuffledCards.slice(middleIndex)];
  }

  return shuffledCards;
};

export {
  getMiddleIndex,
  getWinIndexCombinations,
  shuffle,
  prepareBingoCardsForNewGame
};
