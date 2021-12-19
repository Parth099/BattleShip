const gameBoard = require("../src/gameboardFactory");
it("Test for proper creation of GB", () => {
  const GB = gameBoard();
  expect(GB.allShipsDown).toBeDefined();
  expect(GB.placeShip).toBeDefined();
  expect(GB.receiveAttack).toBeDefined();
});

//placement

//placement vert
//NOTE: The board is required to be exposed for these tests
it("GB: vert Placement, Ship L = 2", () => {
  const GB = gameBoard();
  const shipLen = 3;
  GB.placeShip(0, 0, shipLen, true);
  let testResult = 1;
  for (let k = 0; k < shipLen; k++) {
    testResult &= GB.board[k][0] != 0;
  }
  expect(testResult).toBeTruthy();
});
