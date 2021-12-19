const gameBoard = () => {
  const board = new Array(10).fill(new Array(10).fill(0)); //gen 10x10 board
  //for ship ID
  let rollingShipID = 1;
  const shipMap = new Map();
  const placeShip = (x, y, shipLength, isVert) => {
    let isPlaced = false;
    if (isVert) {
      for (let i = 0; i < shipLength; i++) {
        board[x + i][y] = rollingShipID;
      }
      isPlaced = true;
    }
    if (isPlaced) {
      //map action
    }
    return isPlaced;
  };
  const receiveAttack = (x, y) => {};
  const allShipsDown = () => shipMap.size === 0;

  return { placeShip, receiveAttack, allShipsDown, board };
};

module.exports = gameBoard;
