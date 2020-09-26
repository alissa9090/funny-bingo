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

function shuffle(array) {
  let j;
  let x;
  let i;
  const result = [...array];

  // eslint-disable-next-line no-plusplus
  for (i = result.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = result[i];
    result[i] = result[j];
    result[j] = x;
  }
  return result;
}

export {
  getMiddleIndex,
  getWinIndexCombinations,
  shuffle
};
